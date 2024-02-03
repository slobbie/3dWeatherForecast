import styled from 'styled-components';
import MainPage from '@feature/main/page/MainPage';

const App = () => {
  return (
    <MainDiv
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <MainPage />
    </MainDiv>
  );
};

export default App;

const MainDiv = styled.div`
  background: #1f1f1f;
`;
