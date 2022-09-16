import { Route, Routes } from 'react-router-dom';
import { AppFooter } from './cmps/app-footer';
import { AppHeader } from './cmps/app-header';
import routes from './routes'
import './styles/global.scss';

function App() {
  return (
    <div className="App main-layout">
      <AppHeader/>
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
        </Routes>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
