import React from "react"

import { FormikConfig, FormikValues } from "formik"

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>
}
