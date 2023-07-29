import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import MainPage from './components/Pages/MainPage';
import LoginPage from './components/Pages/LoginPage';
import ErrorPage from './components/Pages/ErrorPage';
import CommunityPage from './components/Pages/CommunityPage';
import EvaluationPage from './components/Pages/EvaluationPage';
import TeamPage from './components/Pages/TeamPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// 부트스트랩, 스타일 컴포넌트, 리액트 라우터 돔 설치
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = { <MainPage /> } />
        <Route path='/team' element = { <TeamPage /> } />
        <Route path='/login' element = { <LoginPage /> } />
        <Route path="/evaluation" element={ <EvaluationPage /> } />
        <Route path="/community" element={ <CommunityPage /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
