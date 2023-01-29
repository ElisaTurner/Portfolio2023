import React from "react";
// import Main from "./Main"
// import Navbar from "./Layout/Header/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./Layout/Body/Components/ContactForm";
// import Main from "./Layout/Body/Main";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div> 
 <BrowserRouter>
 <ContactForm />      
 </BrowserRouter>
   
     {/* <Navbar />  */}
    {/* <Main /> */}
   
    </div>
  );
}

export default App;
