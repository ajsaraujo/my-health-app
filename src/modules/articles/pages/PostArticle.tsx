import { useNavigation } from '@react-navigation/native'
import { FormField, PrimaryButton, TextBox } from '@shared/ui/components'
import { useToastActions } from '@shared/ui/components/toast/ToastProvider'
import { globalStyles } from '@shared/ui/globalStyles'
import { useState } from 'react'
import { View } from 'react-native'
import { Navigation } from 'src/routeParams'

import { postArticle } from './../api'

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
      navigation.pop()
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
            numberOfLines={20}
            multiline={true}
          ></TextBox>
        </FormField>
      </View>

      <PrimaryButton onPress={handleSubmit}>Publicar</PrimaryButton>
    </View>
  )
}
