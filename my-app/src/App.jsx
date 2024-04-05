import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import your components
import HomePage from './pages/HomePage';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import JobcardsPageBA from './pages/JobcardsPageBA';
import JobcardsPageCA from './pages/JobcardsPageCA';
import JobcardsPageCC from './pages/JobcardsPageCC';
import JobcardsPageMC from './pages/JobcardsPageMC';
import JobcardsPageSE from './pages/JobcardsPageSE';
import JobcardsPageSMM from './pages/JobcardsPageSMM';


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
        <Route path='/JobcardsPageSE' element={<JobcardsPageSE />} />
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