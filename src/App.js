import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import User from './pages/User';
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <>

          <div className='container'>
            <Navbar />
            <main>
              <Alert />
              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
