/* eslint-disable import/extensions */
/* eslint-disable max-len */
import pkg from '@prisma/client';
import { add } from 'date-fns';
import bcrypt from 'bcrypt';
import { accessTokenSecret, refreshTokenSecret, tokenInfo } from '../../../config.js';
import * as jwtHelper from '../../helpers/jwt.helper.js';

const { PrismaClient, TokenType } = pkg;
const prisma = new PrismaClient();

// eslint-disable-next-line no-return-await
export const findSpecificUser = async (emailInput) => {
  const email = await prisma.user.findUnique({
    where: {
      email: emailInput,
    },
    select: {
      email: true,
    },
  });

  return email;
};

// Biến cục bộ trên server này sẽ lưu trữ tạm danh sách token
// Trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB
const tokenList = {};

const { accessTokenLife, refreshTokenLife } = tokenInfo;

/**
 * controller login
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  try {
    // Mình sẽ comment mô tả lại một số bước khi làm thực tế cho các bạn như sau nhé:
    // - Đầu tiên Kiểm tra xem email người dùng đã tồn tại trong hệ thống hay chưa?
    // - Nếu chưa tồn tại thì reject: User not found.
    // - Nếu tồn tại user thì sẽ lấy password mà user truyền lên, băm ra và so sánh với mật khẩu của user lưu trong Database
    // - Nếu password sai thì reject: Password is incorrect.
    // - Nếu password đúng thì chúng ta bắt đầu thực hiện tạo mã JWT và gửi về cho người dùng.
    // Trong ví dụ demo này mình sẽ coi như tất cả các bước xác thực ở trên đều ok, mình chỉ xử lý phần JWT trở về sau thôi nhé:

    // 👇 get the email from the request payload
    const { email: emailReq, password: passwordReq } = req.body;

    const emailUser = await prisma.user.findUnique({
      where: {
        email: emailReq,
      },
      select: {
        email: true,
        firstName: true,
        lastName: true,
        password: true,
        id: true,
      },
    });

    const {
      email, firstName, lastName, password, id,
    } = emailUser;

    if (!email) {
      return res.status(403).json({ message: 'email not created' });
    }

    // const saltRounds = await bcrypt.genSalt(10);

    // // now we set user password to hashed password
    // const hash = bcrypt.hashSync(passwordReq, saltRounds);

    // console.log(bcrypt.compareSync(password, hash));

    // 👇 create a date object for the email token expiration
    const tokenExpiration = add(new Date(), {
      minutes: 60,
    });

    if (!bcrypt.compareSync(passwordReq, password)) {
      return res.status(402).json({ message: 'password not correct' });
    }

    const user = {
      email, firstName, lastName, id,
    };

    const accessToken = await jwtHelper.generateToken(user, accessTokenSecret, accessTokenLife);

    const refreshToken = await jwtHelper.generateToken(user, refreshTokenSecret, refreshTokenLife);

    // Lưu lại 2 mã access & Refresh token, với key chính là cái refreshToken để đảm bảo unique và không sợ hacker sửa đổi dữ liệu truyền lên.
    // lưu ý trong dự án thực tế, nên lưu chỗ khác, có thể lưu vào Redis hoặc DB
    // tokenList[refreshToken] = { accessToken, refreshToken };

    // 👇 create a short lived token and update user or create if they don't exist

    // eslint-disable-next-line no-unused-vars
    const createdToken = await prisma.token.create({
      data: {
        accessToken,
        refreshToken,
        type: TokenType.API,
        expiration: tokenExpiration,
        user: {
          connectOrCreate: {
            create: {
              email,
            },
            where: {
              email,
            },
          },
        },
      },
    });

    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

/**
 * controller refreshToken
 * @param {*} req
 * @param {*} res
 */

// eslint-disable-next-line consistent-return
const refreshToken = async (req, res) => {
  // User gửi mã refresh token kèm theo trong body
  const refreshTokenFromClient = req.body.refreshToken;

  // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta
  if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
    try {
      // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded
      const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);

      // Thông tin user lúc này các bạn có thể lấy thông qua biến decoded.data
      // có thể mở comment dòng debug bên dưới để xem là rõ nhé.
      // debug("decoded: ", decoded);
      const userFakeData = decoded.data;
      const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);

      // gửi token mới về cho người dùng
      return res.status(200).json({ accessToken });
    } catch (error) {
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  }
};

export { login, refreshToken };
