import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import Register from './pages/Register';
import MainHeader from './components/MainHeader';
import Main from './pages/Main';
import LoanQualification from './pages/LoanQualification';
import LoanApplication from './pages/LoanApplication';
import Dashboard from './pages/Dashboard';
import LoanAgree from './pages/LoanAgree';

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 10rem;
  box-sizing: border-box;
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
            <Route path="/Qualification" element={<LoanQualification />} />
            <Route path="/Agree" element={<LoanAgree />} />
            <Route path="/LoanApplication" element={<LoanApplication />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Body>
      </BrowserRouter>
    </>
  );
}

export default App;
