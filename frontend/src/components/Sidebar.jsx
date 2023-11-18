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
                        <svg
                        className="h-8 w-8 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-8 w-8 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
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
                                <svg
                                    class="h-8 w-8 text-slate-50"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                   <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect width="6" height="6" x="14" y="5" rx="1" />  <line x1="4" y1="7" x2="10" y2="7" />  <line x1="4" y1="11" x2="10" y2="11" />  <line x1="4" y1="15" x2="20" y2="15" />  <line x1="4" y1="19" x2="20" y2="19" /></svg>
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
                                <svg
                                    class="h-8 w-8 text-slate-50"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                   <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
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
