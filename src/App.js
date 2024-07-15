import './App.css';
import Skills from './Components/Skills';
import Home from './Components/home';

function App() {
  return (
    <>
    <Home/>
    <Skills/>
    <div style={{color:"whitesmoke", padding:"5%"}}>
      <h1>Note:</h1>
      <p>Thank you for visiting my portfolio website. Please note that the <b>site is currently under development</b>, and some functionalities, such as buttons and interactive elements, may not be fully operational at this time. I am actively working on completing these features and appreciate your understanding and patience.</p>
      <p>Best regards,</p>
      <p>Lakshay</p>
    </div>
    </>
  );
}

export default App;
