// @ts-ignore
import './App.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import PageWrapper from '@/components/PageWrapper';
import MainContent from '@/components/MainContent.tsx';

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <MainContent />
      </Container>
    </PageWrapper>
  );
}

export default App;
