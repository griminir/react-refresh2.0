// @ts-ignore
import './App.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import PageWrapper from '@/components/PageWrapper';
import Main from '@/components/Main';

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

export default App;
