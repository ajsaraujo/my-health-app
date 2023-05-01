import { getSession } from './session'

export async function hasPermission(permission: string): Promise<boolean> {
  const session = await getSession()

  if (!session) {
    return false
  }

  return session.permissions.includes(permission)
}

export async function checkIfUserIsAdmin() {
  return hasPermission('adm')
}
