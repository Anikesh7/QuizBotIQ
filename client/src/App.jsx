import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Test from './routes/Test';
import Submit from './routes/Submit';
import Error_404 from './routes/Error_404';
import Error_500 from './routes/Error_500';
import Signup from './routes/Signup'
import Login from './routes/Login'
import Profile from './routes/Profile';
import RefreshHandler from '../refreshHandler';

function App() {
  const [finalScore, setFinalScore] = useState();
  const [topic, setTopic] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to='/login' />
  }



  return (
    <>
      <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<PrivateRoute element={<Home setTopic={setTopic}/>}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test  topic={topic} final={setFinalScore}/>} />
          <Route path="/submit" element={<Submit final={finalScore} topic={topic}/>} />
          <Route path="/error_500" element={<Error_500 />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
