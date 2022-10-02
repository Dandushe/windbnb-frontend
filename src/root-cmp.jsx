import { Route, Routes, useLocation } from 'react-router-dom';
import { AppFooter } from './cmps/app-footer';
import { AppHeader } from './cmps/app-header';
import { LoginSignup } from './cmps/login-signup';
import { Screen } from './cmps/screen';
import routes from './routes'
import './styles/global.scss';

function App() {

  const location = useLocation()

  return (
    <div className={`App ${location.pathname !== '/host' && 'main-layout'}`}>
      <Screen />
      {location.pathname !== '/host' && <AppHeader />}
      <Routes>
        {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
      </Routes>
      <LoginSignup />
      {location.pathname === '/' && <AppFooter />}
    </div>
  );
}

export default App;
