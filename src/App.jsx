import './App.css'
import React, { useEffect } from 'react';
import { Outlet,useLocation} from 'react-router-dom';
import Header from './components/Pro2/Header'
import PagesTranstion from './components/Pro2/PagesTranstion'
//import StairTransition from './components/Pro2/StairTransition'


function App() {

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Milinda Jayawardhana';
        break;
      case '/resume':
        document.title = 'MJ/Resume';
        break;
      case '/services':
        document.title = 'MJ/Services';
        break;
      case '/projects':
        document.title = 'MJ/Projects';
        break;
      case '/contact':
        document.title = 'MJ/Contact';
        break;
      default:
        document.title = 'Milinda Jayawardhana';
        break;
    }
  }, [location]);

  return (
    <>
      <div className='min-h-screen bg-black'>
        
        <Header />
        <PagesTranstion>
          <Outlet />
        </PagesTranstion>
      </div>
    </>
  );
}

export default App;

