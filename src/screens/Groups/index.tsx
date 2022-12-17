import { Header } from '@components/Header'
import { Hightlight } from '@components/Hightlight'
import { GroupCard } from '@components/GroupCard'

import { Container } from './styles'

export function Groups() {
  return(
    <Container>
      <Header />

      <Hightlight 
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <GroupCard 
        title="Nome da turma"
        
      />
    </Container>
  )
}