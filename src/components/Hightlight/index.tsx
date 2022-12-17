import { Container, Title, Subtitle } from './styles'

interface HightlightProps {
  title: string
  subtitle: string
}

export function Hightlight({ title, subtitle }: HightlightProps) {
  return(
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}