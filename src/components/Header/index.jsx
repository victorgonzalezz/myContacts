import { Container, InputContainer } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />

      <InputContainer>
        <input type="text" />
      </InputContainer>
    </Container>
  );
}
