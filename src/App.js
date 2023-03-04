import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorFallback from './Components/errorfalback/ErrorFallback';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import CategoryCount from './pages/catcount/CategoryCount';
import CityCount from './pages/citycount/CityCount';
import ExploredCities from './pages/exploredcities/ExploredCities';
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {ErrorBoundary} from 'react-error-boundary'
import NotFound404 from './pages/notFound404/NotFound404';

function App() {
  return (
    <div className="App">
      <ErrorBoundary
      FallbackComponent={ErrorFallback}
      >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<List />} />
        <Route path='/hotel/:id' element={<Hotels />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/exploredcities' element={<ExploredCities />} />
        <Route path='/hotels/countByCity' element={<CityCount />} />
        <Route path='/hotels/getByCategory' element={<CategoryCount />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
