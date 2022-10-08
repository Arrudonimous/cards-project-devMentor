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
              <img src={ImageCard1} alt="logo" width={50} height={40} />
              <span>Programação</span>
            </header>
            <ParagraphContainer>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus diam fusce donec volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus diam fusce donec volutpat.
              </p>
            </ParagraphContainer>
            <button>Acessar</button>
          </Card1>
          <Card2>
            <header>
              <img src={ImageCard2} alt="logo" width={50} height={40} />
              <span>UI / UX</span>
            </header>
            <ParagraphContainer>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus diam fusce donec volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus diam fusce donec volutpat.
              </p>
            </ParagraphContainer>
            <button>Acessar</button>
          </Card2>
          <Card3>
            <header>
              <img src={ImageCard3} alt="logo" width={50} height={40} />
              <span>Programação</span>
            </header>
            <ParagraphContainer>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus diam fusce donec volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus diam fusce donec volutpat.
              </p>
            </ParagraphContainer>
            <button>Acessar</button>
          </Card3>
        </CardContainer>
        <Footer >
          <span>Aprenda com desafios reais criado por profissionais.</span>
          <button>Começar agora!</button>
        </Footer>
      </Container>
    </>
  );
}

export default App;
