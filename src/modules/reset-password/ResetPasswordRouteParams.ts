type NO_PARAMS = undefined

export type ResetPasswordRouteParams = {
  InsertEmail: { userEmail?: string }
  InsertPinCode: { userEmail: string }
  Success: NO_PARAMS
}
