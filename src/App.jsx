import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'
import Application from './Components/Application/Application'
import { Routes,Route } from 'react-router-dom'



function App() {
  const [language,setLanguage] = useState("No")
  

  return (
    <>
      
    <Routes>
      <Route path="/" element={<Form
      language={language} 
       setLanguage={setLanguage}
    />}
    />
      <Route path='/Education' element={ <Education/>} />
      <Route path='/Application' element={ <Application/>} />
    </Routes>
    <Footer/>  
    
    </>

  )
}
export default App
