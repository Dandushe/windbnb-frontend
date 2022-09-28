import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppFooter } from './cmps/app-footer';
import { AppHeader } from './cmps/app-header';
import { LoginSignup } from './cmps/login-signup';
import routes from './routes'
import { modalType } from './store/stay.action';
import './styles/global.scss';

function App() {
  const currModalType = useSelector(state => state.stayModule.currModalType)
  const location = useLocation()
  const dispatch = useDispatch()
  const onSelectModalType = (type) => {
    dispatch(modalType(type))
}

  return (
    <div className={`App ${location.pathname !== '/host' && 'main-layout'}`}>
     {(currModalType === 'expended-pill' || currModalType === 'filter-options') && <div className='main-screen' onClick={() => onSelectModalType('')}></div>}
      {location.pathname !== '/host' && <AppHeader />}
      {/* <main> */}
        <Routes>
          {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
        </Routes>
        <LoginSignup />
      {/* </main> */}
      {location.pathname !== '/host' && <AppFooter />}
    </div>
  );
}

export default App;
