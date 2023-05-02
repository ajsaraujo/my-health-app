import api, { services } from './api'

async function getRegistrosPaciente({ idPaciente }) {
  return api.get(
    `${services.registros.getRegistrosAtivosPaciente}?pacienteId=${idPaciente}`
  )
}

async function getRegistrosLixeira({ idPaciente }) {
  return api.get(
    `${services.registros.getRegistrosLixeiraPaciente}?pacienteId=${idPaciente}`
  )
}

async function postNewRegister({ relato, pacienteId }) {
  var data = {
    relato,
    pacienteId,
  }
  console.log('chamada da api: ', services.registros.addRegistro, data)
  return api.post(`${(services.registros.addRegistro, data)}`)
}

async function sendToGarbage({ idRegistro }) {
  return api.put(`${services.registros.moverRegistroParaLixeira}/${idRegistro}`)
}

export {
  getRegistrosPaciente,
  postNewRegister,
  getRegistrosLixeira,
  sendToGarbage,
}
