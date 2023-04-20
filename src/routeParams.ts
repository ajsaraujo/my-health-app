import { MyHealthModule } from './modules'

type NO_PARAMS = undefined

export type RouteParams = {
  Login: NO_PARAMS
  Home: NO_PARAMS

  // Calculadoras
  [MyHealthModule.Calculators]: NO_PARAMS

  // Diário
  [MyHealthModule.Diary]: NO_PARAMS

  // Medicamentos
  [MyHealthModule.Medicines]: NO_PARAMS

  // Códigos
  [MyHealthModule.Codes]: NO_PARAMS
  Consulta: { cid10: string }
  ConsultaCid11: { cid11: string }
}
