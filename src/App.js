import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Container from './components/layout/Container'
import Footer from './components/layout/Footer';
import Logo from './components/layout/Logo';
import NavBar from './components/layout/NavBar';

import Competition from './components/pages/Competition';
import Donation from './components/pages/Donation';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Team from './components/pages/Team';


function App() {
  return (
    <Router>
      <Logo />
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/donation' element={<Donation/>}></Route>
          <Route path='/competition' element={<Competition/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
