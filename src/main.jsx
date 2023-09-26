import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Login from './routes/Login/Login.jsx'
import RecuperarSenha from './routes/RecuperarSenha/RecuperarSenha.jsx'
import CadastroUsuario from './routes/CadastroUsuario/CadastroUsuario.jsx'
import CadastroEmpresa from './routes/CadastroEmpresa/CadastroEmpresa.jsx'

import Candidato from './routes/TelasCandidato/Candidato/Candidato.jsx'

import Perfil from './routes/TelasCandidato/Perfil/Perfil.jsx'
import VagasUsuario from './routes/TelasCandidato/MinhasVagas/MinhasVagas.jsx'
import TestesUsuario from './routes/TelasCandidato/Testes/TestesUsuario.jsx'
import Entrevistas from './routes/TelasCandidato/Entrevistas/Entrevistas.jsx'
import Feedbacks from './routes/TelasCandidato/Feedbacks/Feedbacks.jsx'
import VagasDisponiveis from './routes/TelasCandidato/VagasDisponiveis/VagasDisponiveis.jsx'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from'react-router-dom'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login/>}/>
      <Route path='/RecuperarSenha' element={<RecuperarSenha/>}/>
      <Route path='/CadastroUsuario' element={<CadastroUsuario/>}/>
      <Route path='/CadastroEmpresa' element={<CadastroEmpresa/>}/>

      <Route path='/Candidato' element={<Candidato/>}>

        <Route path='Perfil' element={<Perfil/>}/>
        <Route path='VagasUsuario' element={<VagasUsuario/>}/>
        <Route path='VagasDisponiveis' element={<VagasDisponiveis/>}/>
        <Route path='TestesUsuario' element={<TestesUsuario/>}/>
        <Route path='Entrevistas' element={<Entrevistas/>}/>
        <Route path='Feedbacks' element={<Feedbacks/>}/>

      </Route>

      {/*<Route path='/' element={<UserPanel/>}>
        <Route path='/Conta' element={<UserConta/>}/>

      </Route>  */}
      
      
      <Route path='*' element={<>Erro 404!</>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
