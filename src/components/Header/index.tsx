import logoImg from '../../assets/logo01.png'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        {/* <div img src={logoImg} alt="Logo CEDAPP"></div> */}
        <img src={logoImg} alt="Logo CEDAPP" />
        
      </Content>
      
    </Container>
  )
}