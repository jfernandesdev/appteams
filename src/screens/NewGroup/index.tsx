import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { groupCreate } from '@storage/group/groupCreate'

import { AppError } from '@utils/AppError'

import { Header } from '@components/Header'
import { Hightlight } from '@components/Hightlight'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      if(group.trim().length === 0) {
        return Alert.alert('Novo', 'Informe o nome da turma.');
      }

      await groupCreate(group.trim());
      navigation.navigate('players', { group })

    } catch(error) {
      if(error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
        console.log(error)
      }
    }
  }

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
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}