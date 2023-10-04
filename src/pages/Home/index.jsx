import { Link } from 'react-router-dom';

import {
  Container, InputContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import check from '../../assets/images/icons/check.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal danger />
      <InputContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Victor Gonzalez</strong>
              <small>instragram</small>
            </div>
            <span>vitorpcg@gmail.com</span>
            <span>(+351) 99999-000</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={check} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>

  );
}
