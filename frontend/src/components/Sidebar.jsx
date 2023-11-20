// import React from 'react'
// import { Link } from 'react-router-dom'
// import useAuth from '../hooks/useAuth'

// const Sidebar = () => {
//     // const {auth} = useAuth();
//   return (
//     <aside className='md:w-30 lg:w-30 px-2 py-5'>

//         {/* <p className='text-xl font-bold'>{auth.nombre}</p> */}

//         <Link to="/empresas"
//             className='  bg-green-500 w-full p-3  mb-4 uppercase font-bold block text-white 
//             rounded-full cursor-pointer hover:bg-green-800 transition-colors' 

           
//         >
//         See companies
//         </Link>

//         <Link to="crear-empresa"
//         className='bg-green-500 w-full p-3 uppercase font-bold block text-white 
//         rounded-full cursor-pointer hover:bg-green-800 transition-colors'
//         >
//         New company
//         </Link>

//     </aside>
//   )
// }

// export default Sidebar


// import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// const Sidebar = () => {
//     // const {auth} = useAuth();

//     return (
//         <aside className="md:w-1/5 lg:w-1/6 bg-gray-800 text-white p-5 rounded-lg">
//             {/* <p className='text-xl font-bold'>{auth.nombre}</p> */}

//             <Link to="/empresas" className="block p-3 mb-4 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
//                 <span className="flex items-center justify-between">
//                     <span>See Companies</span>
//                     <svg class="h-8 w-8 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
//                     </svg>
//                 </span>
//             </Link>

//             <Link to="crear-empresa" className="block p-3 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
//                 <span className="flex items-center justify-between">
//                     <span>New Company</span>
//                     <svg class="h-8 w-8 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
//                     </svg>
//                 </span>
//             </Link>
//         </aside>
//     );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// const Sidebar = () => {
//     const [isExpanded, setExpanded] = useState(false);
//     // const { auth } = useAuth();

//     const toggleSidebar = () => {
//         setExpanded(!isExpanded);
//     };

//     return (
//         <aside className="bg-gray-800 text-white p-5 rounded-lg">
//             {/* <p className='text-xl font-bold'>{auth.nombre}</p> */}

//             <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
//                 <button onClick={toggleSidebar} className="text-white focus:outline-none">
//                     {isExpanded ? <svg class="h-8 w-8 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/>
//                     </svg> : <svg class="h-8 w-8 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>}
//                 </button>

//                 {isExpanded && (
//                     <div>
//                         <Link to="/empresas" className="block p-3 mb-4 mt-3 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
//                         <span className="flex items-center justify-between">
//                      <span>See Companies</span>
//                      <svg class="h-8 w-8 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
//                   </svg>
//                 </span>
//                         </Link>

//                         <Link to="crear-empresa" className="block p-3 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
//                         <span className="flex items-center justify-between">
//                      <span>New Company</span>
//                      <svg class="h-8 w-8 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
//                      </svg>
//                  </span>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Sidebar = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(!isExpanded);
    };

    const closeSidebar = () => {
        setExpanded(false);
    };

    return (
        <aside className="bg-gray-800 text-white p-5 ">
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    {isExpanded ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                      
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                    )}
                </button>

                {isExpanded && (
                    <div>
                        <Link
                            to="/empresas"
                            className="block p-3 mb-4 mt-3 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
                            onClick={closeSidebar}
                        >
                            <span className="flex items-center justify-between">
                                <span>See Companies</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                            </span>
                        </Link>

                        <Link
                            to="crear-empresa"
                            className="block p-3 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
                            onClick={closeSidebar}
                        >
                            <span className="flex items-center justify-between">
                                <span>New Company</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
