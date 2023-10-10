import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import Register from './pages/Register';
import MainHeader from './components/MainHeader';
import Main from './pages/Main';

const Body = styled.div`
  padding-top: 64px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Body>
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </Body>
      </BrowserRouter>
    </>
  );
}

export default App;
