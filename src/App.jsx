import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Layout = () => {
  const location = useLocation();

  const showSidebar = location.pathname !== '/' && location.pathname !== '/sign-up';

  return (
    <>
      {showSidebar?
        <div className="d-flex">
            <Sidebar />
            <div className="p-4" style={{ width: '100%' }}>
                <AppRoutes />
            </div>
        </div>
        :
        <AppRoutes />
      }
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
