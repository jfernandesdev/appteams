import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonTypeStyleProps } from './styles'

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button ({ type = 'PRIMARY', title, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}