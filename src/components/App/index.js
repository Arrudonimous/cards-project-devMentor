import GlobalStyles from '../../assets/styles/global'
import { Card1, Card2, Card3, CardContainer, Container, Footer, ParagraphContainer } from './styles';
import ImageCard1 from '../../assets/images/Card 1.svg'
import ImageCard2 from '../../assets/images/Card 2.svg';
import ImageCard3 from '../../assets/images/Card 3.svg';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <CardContainer>
          <Card1>
            <header>
              <img src={ImageCard1} alt="logo" width={50} height={50} />
              <span>Linkedin</span>
            </header>
            <ParagraphContainer>
              <p>Aplicão feita para treinar e adquirir conhecimentos sobre ReactJS pela plataforma Dev Mentor
              </p>
              <p>Aplicação desenvolvida utilizando: ReactJS, StyledComponents, CRA(Create React App)
              </p>
            </ParagraphContainer>
            <a href='https://www.linkedin.com/in/diego-arruda-9586791bb/'>Acessar</a>
          </Card1>
          <Card2>
            <header>
              <img src={ImageCard2} alt="logo" width={50} height={50} />
              <span>Github</span>
            </header>
            <ParagraphContainer>
              <p>Aplicão feita para treinar e adquirir conhecimentos sobre ReactJS pela plataforma Dev Mentor
              </p>
              <p>Aplicação desenvolvida utilizando: ReactJS, StyledComponents, CRA(Create React App)
              </p>
            </ParagraphContainer>
            <a href='https://github.com/Arrudonimous'>Acessar</a>
          </Card2>
          <Card3>
            <header>
              <img src={ImageCard3} alt="logo" width={50} height={50} />
              <span>Instagram</span>
            </header>
            <ParagraphContainer>
              <p>Aplicão feita para treinar e adquirir conhecimentos sobre ReactJS pela plataforma Dev Mentor
              </p>
              <p>Aplicação desenvolvida utilizando: ReactJS, StyledComponents, CRA(Create React App)
              </p>
            </ParagraphContainer>
            <a href='https://www.instagram.com/arrudonimous.js/'>Acessar</a>
          </Card3>
        </CardContainer>
        <Footer >
          <span>Link do repositório no github -></span>
          <a href='https://github.com/Arrudonimous/cards-project-devMentor'>Repositório</a>
        </Footer>
      </Container>
    </>
  );
}

export default App;
