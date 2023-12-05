import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Empresas from './paginas/Empresas'
import NuevaEmpresa from './paginas/NuevaEmpresa'
import NuevoColaborador from './paginas/NuevoColaborador'
import Empresa from './paginas/Empresa'
import EditarEmpresa from './paginas/EditarEmpresa'
import {AuthProvider} from './context/AuthProvider'
import { EmpresasProvider } from './context/EmpresasProvider'
import Usuarios from './paginas/Usuarios'
import RolUsuario from './components/ModalFormularioUsuario';
import EditarUsuario from './paginas/EditarUsuario'
import Evaluaciones from './paginas/Evaluaciones'
import { UsuariosProvider } from './context/UsuariosProvider'




function App() {
 

  return (
   <BrowserRouter>
    <AuthProvider>
      <EmpresasProvider>
      <UsuariosProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login/>}/>
            <Route path="registrar" element={<Registrar/>}/>
            <Route path="olvide-password" element={<OlvidePassword/>}/>
            <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
            <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>
          
          <Route path="/empresas" element={<RutaProtegida/>}>
            <Route index element={<Empresas/>} />
            <Route path='crear-empresa' element={<NuevaEmpresa/>}/>
            <Route path='nuevo-colaborador/:id' element={<NuevoColaborador/>}/>
            <Route path=':id' element={<Empresa/>}/>
            <Route path='editar/:id' element={<EditarEmpresa/>}/>
          </Route>

         
            <Route path="/usuarios" element={<RutaProtegida/>}>
              <Route index element={<Usuarios/>} />
              <Route path='editar/:id' element={<EditarUsuario/>}/>
              <Route path=':id' element={<RolUsuario/>}/>
            </Route>
            <Route path="/evaluaciones" element={<RutaProtegida/>}>
              <Route index element={<Evaluaciones/>} />
            </Route>
        </Routes>
        </UsuariosProvider> 
      </EmpresasProvider>

    

    </AuthProvider>
   
   </BrowserRouter>
  )
}

export default App



