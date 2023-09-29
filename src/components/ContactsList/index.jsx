import { Container, Header, ListContainer, Card } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import check from '../../assets/images/icons/check.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={check} alt="Edit" />
            </a>
            <button type='button'>
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>
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
            <a href="/">
              <img src={check} alt="Edit" />
            </a>
            <button type='button'>
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>
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
            <a href="/">
              <img src={check} alt="Edit" />
            </a>
            <button type='button'>
              <img src={trash} alt="Lixeira" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>

  );
}
