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
import Empresa from './paginas/Empresa'
import EditarEmpresa from './paginas/EditarEmpresa'
import {AuthProvider} from './context/AuthProvider'
import { EmpresasProvider } from './context/EmpresasProvider'



function App() {
 

  return (
   <BrowserRouter>
   <AuthProvider>
    <EmpresasProvider>
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
        <Route path=':id' element={<Empresa/>}/>
        <Route path='editar/:id' element={<EditarEmpresa/>}/>


     
        
      </Route>

       

    </Routes>
    </EmpresasProvider>
    </AuthProvider>
   
   </BrowserRouter>
  )
}

export default App



