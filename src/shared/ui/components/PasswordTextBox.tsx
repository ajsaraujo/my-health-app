import { TextBox, TextBoxProps } from './TextBox'

export function PasswordTextBox(props: TextBoxProps) {
  return <TextBox secureTextEntry={true}></TextBox>
}
