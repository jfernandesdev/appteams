import { Header } from '@components/Header'
import { Hightlight } from '@components/Hightlight'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  return(
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Hightlight 
          title="Nova turma"
          subtitle="crie uma nova turma para adicionar pessoas"
        />

        <Input 
          placeholder="Nome da turma"
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}