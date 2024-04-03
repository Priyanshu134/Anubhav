import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import your components
import HomePage from './pages/HomePage';
// import LoginForm from './components/LoginForm';


// Define your routes
const App = () => {
  // const token = useSelector(selectToken);
  // const verify = useVerify();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<LandingPage />} /> */}
          <Route path='/home' element={<HomePage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
