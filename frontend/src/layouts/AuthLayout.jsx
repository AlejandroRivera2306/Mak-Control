import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (

    <>
   
    <main className=' container mx-auto mt-2 md:mt-2 p-2 md:flex md:justify-center'>

        <div className='md:w-2/3 lg:w-1/2'>
        <Outlet/>
        </div>
        
    </main>
      

    </>
  )
}

export default AuthLayout
