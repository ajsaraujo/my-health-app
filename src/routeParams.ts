import { MyHealthModule } from './modules'

type NO_PARAMS = undefined

export type RouteParams = {
  Login: NO_PARAMS
  Home: NO_PARAMS
  Consulta: { name: string }
  [MyHealthModule.Calculators]: NO_PARAMS
  [MyHealthModule.Codes]: NO_PARAMS
  [MyHealthModule.Diary]: NO_PARAMS
  [MyHealthModule.Medicines]: NO_PARAMS
}
