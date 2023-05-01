import api, { services } from './api'

async function getRegistrosPaciente({ idPaciente }) {
  var response = await api.get(
    `${services.registros.getRegistrosAtivosPaciente}?pacienteId=${1}`
  )
  console.log('response: ', response)
  return api.get(
    `${services.registros.getRegistrosAtivosPaciente}?pacienteId=${idPaciente}`
  )
}

export { getRegistrosPaciente }
