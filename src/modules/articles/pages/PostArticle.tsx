import { View, TextInput } from 'react-native'
import { MyHealthModule } from '.../../src/modules'
import { useNavigation } from '@react-navigation/native'
import { Navigation } from 'src/routeParams'
import { useState } from 'react'
import { globalStyles } from '@shared/ui/globalStyles'
import { FormField, PrimaryButton, TextBox } from '@shared/ui/components'
import { postArticle } from './../api'
import { Article } from '../interfaces/Article'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'

type NewsForm = {
  title: string
  content: string
  authorId: string
}

export function NewsForm() {
  const navigation = useNavigation<Navigation>()
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
  })

  const toast = useToastActions()

  async function handleSubmit() {
    const result = await postArticle(formValues.title, formValues.content)

    if (result.isOk) {
      toast.success('O artigo foi publicado com sucesso.')
      navigation.navigate(MyHealthModule.Articles)
    } else {
      toast.error(result.message)
    }
  }

  return (
    <View
      style={[
        globalStyles.defaultContainer,
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        },
      ]}
    >
      <View>
        <FormField label="Título" style={globalStyles.marginBottom2}>
          <TextBox
            value={formValues.title}
            onChangeText={(title) => setFormValues({ ...formValues, title })}
          ></TextBox>
        </FormField>

        <FormField label="Conteúdo">
          <TextBox
            value={formValues.content}
            onChangeText={(content) =>
              setFormValues({ ...formValues, content })
            }
          ></TextBox>
        </FormField>
      </View>

      <PrimaryButton onPress={handleSubmit}>Publicar</PrimaryButton>
    </View>
  )
}
