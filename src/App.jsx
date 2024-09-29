import { useEffect, useState } from 'react';
import './css/App.css';
import i18n from './i18n';
import { slice } from 'lodash';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Offices from './components/Offices.jsx';

const App = () => {
  const [page, setPage] = useState('landing');
  const switchPage = (nextPage) => {
    let history = JSON.parse(sessionStorage.getItem('history')) || [];
    const pageIndex = Number(sessionStorage.getItem('pageIndex')) || 0;
    const newHistory = [];
    if (window.history.state === null) {
      newHistory.push(page);
      window.history.pushState({ 1:'1' }, window.location.href);
    } else {
      slice(history, 0, pageIndex + 1).forEach((page) => newHistory.push(page)) ;
      window.history.pushState({ [pageIndex + 1]: pageIndex + 1 }, window.location.href);
    };
    if (page !== nextPage) {
      newHistory.push(nextPage);
      sessionStorage.setItem('pageIndex', newHistory.length - 1);
      sessionStorage.setItem('history', JSON.stringify(newHistory));
      setPage(nextPage);
    }
  };

  window.onpopstate = function (e) {
    e.preventDefault();
    const history = JSON.parse(sessionStorage.getItem('history'));
    const pageIndex = Number(sessionStorage.getItem('pageIndex'));
    const state = window.history.state ? Object.keys(window.history.state)[0] : 0;
    if (state < pageIndex) {
      const prevPage = history[pageIndex - 1];
      sessionStorage.setItem('pageIndex', pageIndex - 1);
      setPage(prevPage);
    } else {
      const nextPage = history[pageIndex + 1];
      sessionStorage.setItem('pageIndex', pageIndex + 1);
      setPage(nextPage);
    };
  };

  const renderPage = () => {
    if (page === 'offices') return <Offices switchPage={switchPage} />
    if (page === 'projects') return <Projects switchPage={switchPage} />
    if (page.includes('project_')) return <ProjectPage id={page.slice(-1)} switchPage={switchPage} />
    return <LandingPage switchPage={switchPage} />
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
