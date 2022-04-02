import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Fullstack from './components/frontendFoFiles/Fullstack'
import Backend from './components/frontendFoFiles/Backend'
import AppDev from './components/frontendFoFiles/AppDev'
import UiUx from './components/frontendFoFiles/UiUx'
import Frontend from './components/frontendFoFiles/Frontend'
import MachineLearning from './components/frontendFoFiles/MachineLearning'
import FAQPage from './components/faqfiles/FAQPage'
import Footer from './components/Footerfiles/Footer';
import Company from './components/Company'
import Executive from './components/Executive'
import Contact from './components/Contact'
import Team2 from './components/Team2'
import Mentors from './components/Mentors'
import Blog from './components/pages/Blog'
import Apply from './components/appFormfiles/Apply'

function App() {
  return (
    <Router>
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/fullstack" element={ <Fullstack/> } />
<Route path="/backend" element={ <Backend/> } />
<Route path="/frontend" element={ <Frontend/> } />
<Route path="/appdevelopment" element={ <AppDev/> } />
<Route path="/uiuxdesign" element={ <UiUx/> } />
<Route path="/machinelearning" element={ <MachineLearning/> } />
<Route path="/FAQPage" element={ <FAQPage/> } />
{/* <Route path="/" element={ <Home/> } /> */}
<Route path="/company" element={ <Company/> } />
<Route path="/team" element={ <Team2/> } />
<Route path="/mentor" element={ <Mentors/> } />
<Route path="/director" element={ <Executive/> } />
<Route path="/contact" element={ <Contact/> } />
<Route path="/Apply" element={ <Apply/> } />
<Route path="/blog" element={ <Blog/> } />
</Routes>
<Footer/> 
    </Router>
  );
}

export default App;
