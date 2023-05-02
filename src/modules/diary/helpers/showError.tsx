import { Alert } from 'react-native'

const errors = {
  'Network Error': 'Não foi possível acessar a rede Detran.',
  'Request failed with status code 400':
    'Houve um problema de acesso à rede Detran.',
  'Request failed with status code 401':
    'Houve um problema de acesso à rede Detran.',
  'Request failed with status code 402':
    'Houve um problema de acesso à rede Detran.',
  'Request failed with status code 403':
    'Houve um problema de acesso à rede Detran.',
  'Request failed with status code 404':
    'Houve um problema de acesso à rede Detran.',
  'Request failed with status code 500':
    'Não foi possível acessar o serviço atual.',
  'Request failed with status code 501':
    'Não foi possível acessar o serviço atual.',
  'Request failed with status code 502':
    'Não foi possível acessar o serviço atual.',
  'Request failed with status code 503':
    'Não foi possível acessar o serviço atual.',
  'undefined is not a function': 'Não foi possível acessar o serviço atual.',
  "Cannot read property 'response' of undefined":
    'Houve um problema de acesso à rede Detran.',
  "Cannot read property 'response' of null":
    'Houve um problema de acesso à rede Detran.',
}

const errorMsg =
  '\n\nPor favor, volte mais tarde para efetuar o serviço, tente pelo nosso Portal ou entre em contato com nossa equipe de atendimento.'

export default function showError(title, err) {
  if (errors[err] != null) err = errors[err] + errorMsg
  // if (err.includes('*') == true) err = errorAdapter(err)

  if (err.response && err.response.data) {
    Alert.alert(`${title}`, `${err}`, [{ text: 'Entendi', onPress: () => {} }])
  } else {
    Alert.alert(`${title}`, `${err}`, [{ text: 'Entendi', onPress: () => {} }])
  }
}
