import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header"
import useAuth from "../hooks/useAuth"
import Sidebar from "../components/Sidebar"


const RutaProtegida = () => {

    const { auth, cargando} = useAuth()
    if(cargando) return 
    

  return (
    <>
        {/* {auth._id ? <Outlet/> : <Navigate to="/"/>} */}
        {auth._id ? (
            <div className="bg-gray-100">
                <Header/>


            <div className="md:flex md:min-h-screen">
                <Sidebar/>

                <main className="p-10 flex-1 bg-slate-200 rounded-md">

                    <Outlet/>
                </main>

            </div>
            </div>


        ) : <Navigate to="/"/>}
    
    </>
  )
}

export default RutaProtegida