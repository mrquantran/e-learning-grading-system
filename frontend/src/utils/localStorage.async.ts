export class Storage {
  get(item) {
    const request = new Promise((resolve, reject) => {
      let data = localStorage.getItem(item)
      console.log(`Start of promise`)
      data ? resolve(data) : reject()
    })

    request.then((data: any) => {
      console.log(`promise resolved`)
      console.log(JSON.parse(data))
      return JSON.parse(data)
    })

    request.catch(error => {
      console.log(`Promise rejected`)
      console.log(error)
    })
  }
  set(name, data) {
    localStorage.setItem(name, JSON.stringify(data))
  }
}
