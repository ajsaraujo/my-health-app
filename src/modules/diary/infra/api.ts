import axios from 'axios'

const api = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
  },
  baseURL: 'https://localhost:44347/',
})

export const services = {
  paciente: {
    getPaciente: 'Paciente/Get',
    addPaciente: 'Paciente/AddPaciente',
  },
  registros: {
    getRegistrosAtivosPaciente: 'Registro/GetRegistrosPaciente/',
    getRegistrosLixeiraPaciente: '/Registro/GetLixeiraPaciente',
    addRegistro: 'Registro/AddRegistro',
    atualizarRegistro: 'Registro/UpdateRegistro',
    moverRegistroParaLixeira: 'Registro/MoveToLixeira/',
    restaurarRegistro: 'Registro/RestoreFromTrash/',
    apagarRegistro: 'Registro/DeleteFromTrash/',
  },
}

export default api
