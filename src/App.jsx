import Hero from './components/Hero';
import './App.css';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from "styled-components"


const Container= styled.div`
height:100vh;
scroll-snap-type:y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width:none;
color:white;
background:url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display:none
}

`
function App() {
  return (
  
      <Container>
      <Hero/>
      <AboutMe/>
      <Works/>
      <Contact/>
      </Container>
   

  );
}

export default App;
