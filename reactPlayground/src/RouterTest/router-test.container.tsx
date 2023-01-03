import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about.component';
import Home from './pages/home.component';
import NotFound from './pages/not-found.component';
import Profile from './pages/profile.component';

const RouterTest = (props) => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default RouterTest;
