import { View, TextInput } from 'react-native'
import { MyHealthModule } from '.../../src/modules'
import { useNavigation } from '@react-navigation/native'
import { Navigation } from 'src/routeParams'
import { useState } from 'react'
import { globalStyles } from '@shared/ui/globalStyles'
import { PrimaryButton } from '@shared/ui/components'
import { postArticle } from './../api'
import { Article } from '../interfaces/Article'
type NewsForm = {
  title: string
  content: string
  authorId: string
}

export function NewsForm() {
  const navigation = useNavigation<Navigation>()
  const [formValues, setFormValues] = useState<Article>({
    title: '',
    content: '',
    authorId: 'colocar user_id',
  })

  const handleSubmit = async () => {
    try {
      const response = await postArticle(formValues)
      if (response === 201) {
        navigation.navigate(MyHealthModule.Articles)
      }
    } catch (error) {
      //   Melhorar esse catch error
      alert('Ocorreu um erro ao enviar a notícia.')
    }
  }

  return (
    <View style={globalStyles.centerVertically}>
      <TextInput
        style={globalStyles.centerHorizontally}
        placeholder="Título"
        onChangeText={(value) => setFormValues({ ...formValues, title: value })}
        value={formValues.title}
      />
      <TextInput
        style={globalStyles.centerHorizontally}
        placeholder="Conteúdo"
        onChangeText={(value) =>
          setFormValues({ ...formValues, content: value })
        }
        value={formValues.content}
        multiline
      />
      <PrimaryButton onPress={handleSubmit}>Publicar</PrimaryButton>
    </View>
  )
}
