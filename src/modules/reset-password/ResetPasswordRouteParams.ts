type NO_PARAMS = undefined

export type ResetPasswordRouteParams = {
  InsertEmail: { userEmail?: string }
  InsertPinCode: { userEmail: string }
  InsertNewPassword: NO_PARAMS
  Success: NO_PARAMS
}
