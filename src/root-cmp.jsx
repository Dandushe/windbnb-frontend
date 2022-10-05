import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppFooter } from './cmps/app-footer';
import { AppHeader } from './cmps/app-header';
import { LoginSignup } from './cmps/login-signup';
import { Screen } from './cmps/screen';
import { UserMsg } from './cmps/user-msg';
import routes from './routes'
import { socketService, SOCKET_EVENT_ADDED_RESERVATION } from './services/socket.service';
import { setAlertData } from './store/user.action';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch()
  socketService.on(SOCKET_EVENT_ADDED_RESERVATION, data => {
    dispatch(setAlertData(data))
  })

  const location = useLocation()

  return (
    <div className={`App ${location.pathname !== '/host' && 'main-layout'}`}>
      {location.pathname !== '/host' && <AppHeader />}
      <Routes>
        {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
      </Routes>
      <LoginSignup />
      {location.pathname === '/' && <AppFooter />}
      <Screen />
      <UserMsg />
    </div>
  );
}

export default App;
