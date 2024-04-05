import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import your components
import HomePage from './pages/HomePage';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import JobcardsPageCA from './components/JobcardsPageCA';
import JobcardsPageBA from './components/JobcardsPageBA';
import JobcardsPageSA from './components/JobcardsPageSA';
import JobcardsPageSMM from './components/JobcardsPageSMM';
import JobcardsPageMC from './components/JobcardsPageMC';
import JobcardsPageCC from './components/JobcardsPageCC';
// import LoginForm from './components/LoginForm';
// import { AuthProvider } from './home.privacy/AuthContext';
// import PrivateRoute from './home.privacy/PrivateRoute';

// Define your routes
const App = () => {
  return (
    //   <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/JobcardsPageCA' element={<JobcardsPageCA />} />
        <Route path='/JobcardsPageBA' element={<JobcardsPageBA />} />
        <Route path='/JobcardsPageSA' element={<JobcardsPageSA />} />
        <Route path='/JobcardsPageSMM' element={<JobcardsPageSMM />} />
        <Route path='/JobcardsPageMC' element={<JobcardsPageMC />} />
        <Route path='/JobcardsPageCC' element={<JobcardsPageCC />} />


        {/* <PrivateRoute path="/home" element={<HomePage />} /> */}
        {/* <Route path='/home' element={<PrivateRoute/>}>
                    <Route path='/home' element={<LandingPage/>}/>
                      </Route> */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    //   {/* </AuthProvider> */}
  );
};

export default App;