import { useEffect, useState } from 'react';
import './css/App.css';
import i18n from './i18n';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Offices from './components/Offices.jsx';

const App = () => {
  const [page, setPage] = useState('landing');
  const switchPage = (nextPage) => {
    const history = JSON.parse(sessionStorage.getItem('history')) || [];
    if (history.length === 0) {
      window.history.pushState(window.location.href, window.location.href);
    }
    history.push(page);
    sessionStorage.setItem('history', JSON.stringify(history));
    setPage(nextPage);
  };

  const renderPage = () => {
    if (page === 'offices') return <Offices switchPage={switchPage} />
    if (page === 'projects') return <Projects switchPage={switchPage} />
    if (page.includes('project_')) return <ProjectPage id={page.slice(-1)} switchPage={switchPage} />
    return <LandingPage switchPage={switchPage} />
  };


  window.onpopstate = function (e) {
    e.preventDefault();
    const history = JSON.parse(sessionStorage.getItem('history')) || [];
    const prevPage = history.pop();
    setPage(prevPage);
    sessionStorage.setItem('history',JSON.stringify(history));
    if (history.length !== 0) {
      window.history.pushState(window.location.href, window.location.href);
    } else {
      location.reload();
      setPage('landing')
    }
  };

  return (
    <div className='bg-secondary flex flex-col min-h-screen'>
      <Header switchPage={switchPage}/>
      {renderPage(page)}
      <Footer />
    </div>
  );
}

export default App;
