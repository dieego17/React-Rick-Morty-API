/* eslint-disable no-unused-vars */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Actores from './components/Actores'
import Episodios from './components/Episodios'
import EpisodiosActores from './components/EpisodiosActores'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='actores' element={<Actores />} />
          <Route path='episodios' element={<Episodios />} >
            <Route path=':id' element={<EpisodiosActores />} />
          </Route>

          {/* Ruta para que si pongamos una ruta incorrecta redireccione al home */}
          <Route path='*' element={<Navigate to='/'/>} />
        </Route>
    </Routes>
  </BrowserRouter>
)
