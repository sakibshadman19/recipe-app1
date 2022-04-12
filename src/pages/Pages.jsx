import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import Recipe from './Recipe'
import Searched from './Searched'


const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>

     <Routes location={location} key={location.path}>
       <Route path= "/" element= {<Home/>}/>
       <Route path= "/cuisine/:type" element= {<Cuisine/>}/>
       <Route path= "/searched/:search" element= {<Searched/>}/>
       <Route path= "/recipe/:name" element= {<Recipe/>}/>

     </Routes>
    </AnimatePresence>
  
   
  )
}

export default Pages