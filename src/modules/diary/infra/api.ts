import axios from 'axios'

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: 'https://e0fb-138-255-87-166.ngrok-free.app/',
})

export const services = {
  paciente: {
    getPaciente: 'Paciente/Get',
    addPaciente: 'Paciente/AddPaciente',
  },
  registros: {
    getRegistrosAtivosPaciente: 'Registro/GetRegistrosPaciente/',
    getRegistrosLixeiraPaciente: 'Registro/GetLixeiraPaciente/',
    addRegistro: 'Registro/AddRegistro',
    atualizarRegistro: 'Registro/UpdateRegistro',
    moverRegistroParaLixeira: 'Registro/MoveToLixeira/',
    restaurarRegistro: 'Registro/RestoreFromTrash/',
    apagarRegistro: 'Registro/DeleteFromTrash/',
  },
}

export default api
