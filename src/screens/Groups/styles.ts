import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 48px;
`