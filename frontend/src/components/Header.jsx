// import React from 'react'
// import { Link } from 'react-router-dom' 

// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: false },
//   { name: 'Companies', href: '/empresas', current: false },
//   { name: 'Staff', href: '#', current: false },
//   { name: 'Evaluation', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Header() {
//   return (
//     <>
//       <div className="min-h-full">
//         <Disclosure as="nav" className="bg-gray-50">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16 items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-13 w-12"
//                         src="../img/logo.png"
//                         alt="Your Company"

//                       />
                      
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? 'bg-gray-900 text-white'
//                                 : 'text-black hover:bg-gray-700 hover:text-white',
//                               'rounded-md px-3 py-2 text-sm font-medium'
//                             )}
//                             aria-current={item.current ? 'page' : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
                   
//                       <button
//                         type="button"
//                         className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="relative ml-3">
//                         <div>
//                           <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="absolute -inset-1.5" />
//                             <span className="sr-only">Open user menu</span>
//                             <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? 'bg-gray-100' : '',
//                                       'block px-4 py-2 text-sm text-gray-700'
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-0.5" />
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
//                 <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block rounded-md px-3 py-2 text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pb-3 pt-4">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">{user.name}</div>
//                       <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
//                     </div>
//                     <button
//                       type="button"
//                       className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
                   
                    
                
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>

    
//       </div>
//     </>
//   )
// }




// import React, { useState } from 'react';

// const Header = () => {
//   const [activeTab, setActiveTab] = useState('Dashboard');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <header className="bg-white">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center space-x-4">
//           <img
//             className="h-15 w-22"
//             src="../img/aldanalog.png"
//             alt="Your Company"
//           />
//           {/* <div className="text-xl font-bold">Tu Aplicación</div> */}
//         </div>
//         <ul className="flex space-x-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           {['Dashboard', 'Companies', 'Staff', 'Evaluation', 'Reports'].map((tab) => (
//             <li key={tab}>
//               <button
//                 className={`${
//                   activeTab === tab
//                     ? 'text-blue-500 focus:text-blue-500'
//                     : 'hover:text-blue-500'
//                 } transition-colors duration-300 ease-in-out`}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import useAuth from '../hooks/useAuth'


// const Header = () => {
//   const [activeTab, setActiveTab] = useState('Dashboard');
//   const {auth} = useAuth();

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <header className="bg-white">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center space-x-4">
//         <img
//             className="h-16 w-auto"
//             src="../img/aldanalog.png"
//             alt="Your Company"
//           />
//         </div>
//         <ul className="flex space-x-4 text-1xl font-bold leading-9 tracking-tight text-gray-900">
//           {['Dashboard', 'Companies', 'Staff', 'Evaluation', 'Reports'].map((tab) => (
//             <li key={tab}>
//               <button
//                 className={`${
//                   activeTab === tab
//                     ? 'text-slate-500 focus:text-gray-50 border border-gray-300 rounded-full p-1 bg-fuchsia-950 text-gray-50'
//                     : 'hover:text-slate-700 hover:bg-green-100 border border-gray-300 rounded-full p-2 transition-all duration-300'
//                 }`}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <svg class="h-8 w-8 text-slate-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
//          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
//         </svg>
//         <h2>{auth.nombre}</h2>
       
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import useAuth from '../hooks/useAuth'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   const [activeTab, setActiveTab] = useState('Companies');
//   const { auth } = useAuth();

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <header className="bg-white">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center space-x-4">
//           <img
//             className="h-16 w-auto"
//             src="../img/aldanalog.png"
//             alt="Your Company"
//           />
          
//         </div>
//         <ul className="flex space-x-4 text-1xl font-bold leading-9 tracking-tight text-gray-900">
//           {['Dashboard', 'Companies', 'Staff', 'Evaluation', 'Reports'].map((tab) => (
//             <li key={tab}>
//               <button
//                 className={`${
//                   activeTab === tab
//                     ? 'text-slate-500 focus:text-gray-50 border border-gray-300 rounded-full p-1 bg-fuchsia-950 text-gray-50'
//                     : 'hover:text-slate-700 hover:bg-green-100 border border-gray-300 rounded-full p-2 transition-all duration-300'
//                 }`}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center space-x-2">
//             <svg
//               className="h-8 w-8 text-slate-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//               />
//             </svg>
//             <h2 className="text-gray-900">{auth.nombre}</h2>
//           </div>
//       </nav>

      
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import useAuth from '../hooks/useAuth'
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [activeTab, setActiveTab] = useState('Companies');
//   const { auth } = useAuth();

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <header className="bg-white">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center space-x-4">
//           <img
//             className="h-16 w-auto"
//             src="../img/aldanalog.png"
//             alt="Your Company"
//           />
//         </div>
//         <ul className="flex space-x-4 text-1xl font-bold leading-9 tracking-tight text-gray-900">
//           {[ 'Companies', 'Staff', 'Evaluation', 'Reports'].map((tab) => (
//             <li key={tab}>
//               {tab === 'Companies' ? (
//                 <Link to="/empresas">
//                   <button
//                     className={`${
//                       activeTab === tab
//                         ? 'text-slate-100 focus:text-gray-50 border border-gray-300 rounded-full p-1 bg-fuchsia-950 text-gray-50'
//                         : 'hover:text-slate-700 hover:bg-green-100 border border-gray-300 rounded-full p-2 transition-all duration-300'
//                     }`}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 </Link>
//               ) : (
//                 <button
//                   className={`${
//                     activeTab === tab
//                       ? 'text-slate-500 focus:text-gray-50 border border-gray-300 rounded-full p-1 bg-fuchsia-950 text-gray-50'
//                       : 'hover:text-slate-700 hover:bg-green-100 border border-gray-300 rounded-full p-2 transition-all duration-300'
//                   }`}
//                   onClick={() => handleTabClick(tab)}
//                 >
//                   {tab}
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-2">
//           <svg
//             className="h-8 w-8 text-slate-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//             />
//           </svg>
//           <h2 className="text-gray-900">{auth.nombre}</h2>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header; // este vale 

// import React, { useState } from 'react';
// import useAuth from '../hooks/useAuth';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [activeTab, setActiveTab] = useState('Companies');
//   const { auth } = useAuth();

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <header className="bg-white shadow-md">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center space-x-4">
//           <img
//             className="h-16 w-auto"
//             src="../img/aldanalog.png"
//             alt="Your Company"
//           />
//         </div>
//         <ul className="flex space-x-4 text-1xl font-bold leading-9 tracking-tight text-gray-900">
//           {['Companies', 'Staff', 'Evaluation', 'Reports'].map((tab) => (
//             <li key={tab}>
//               {tab === 'Companies' ? (
//                 <Link to="/empresas">
//                   <button
//                     className={`${
//                       activeTab === tab
//                         ? 'text-white focus:outline-none border border-transparent rounded-full p-2 bg-indigo-600'
//                         : 'text-gray-700 hover:text-gray-900 border border-transparent rounded-full p-2 transition-all duration-300'
//                     }`}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 </Link>
//               ) : (
//                 <button
//                   className={`${
//                     activeTab === tab
//                       ? 'text-white focus:outline-none border border-transparent rounded-full p-2 bg-indigo-600'
//                       : 'text-gray-700 hover:text-gray-900 border border-transparent rounded-full p-2 transition-all duration-300'
//                   }`}
//                   onClick={() => handleTabClick(tab)}
//                 >
//                   {tab}
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-2">
//           <svg
//             className="h-8 w-8 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//             />
//           </svg>
//           <h2 className="text-gray-900 font-semibold">{auth.nombre}</h2>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import useEmpresas from '../hooks/useEmpresas';
import Busqueda from './busqueda';



const Header = () => {
  const [activeTab, setActiveTab] = useState('Companies');
  const { auth } = useAuth();

  const { handleBuscador} = useEmpresas()

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="bg-gray-50 text-black ">
      <Busqueda/>
      <nav className="container mx-auto flex items-center justify-between py-4 flex-col md:flex-row">
        <div className="flex items-center space-x-4  ">
          <img
            className="h-12 w-auto"
            src="../img/aldanalog.png"
            alt="Your Company"
          />
        </div>
        <ul className="flex space-x-4 text-xl font-semibold leading-9 ">
          {['Companies', 'Staff', 'Evaluation', 'Reports'].map((tab) => (
            <li key={tab}>
              {tab === 'Companies' ? (
                <Link to="/empresas">
                  <button
                    className={`${
                      activeTab === tab
                        ? 'text-white border border-white rounded-full p-2 bg-green-500'
                        : 'hover:text-green-500 hover:bg-white border border-white rounded-full p-2 transition-all duration-300'
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                </Link>
                ) : tab === 'Staff' ? (
                <Link to="/usuarios">
                  <button
                    className={`${
                      activeTab === tab
                        ? 'text-white border border-white rounded-full p-2 bg-green-500'
                        : 'hover:text-green-500 hover:bg-white border border-white rounded-full p-2 transition-all duration-300'
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                </Link>    
                ) : tab === 'Evaluation' ? (
                <Link to="/evaluaciones">
                  <button
                    className={`${
                      activeTab === tab
                        ? 'text-white border border-white rounded-full p-2 bg-green-500'
                        : 'hover:text-green-500 hover:bg-white border border-white rounded-full p-2 transition-all duration-300'
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                </Link>                    
              ) : (
                <button
                  className={`${
                    activeTab === tab
                      ? 'text-white border border-white rounded-full p-2 bg-green-500'
                      : 'hover:text-green-500 hover:bg-white border border-white rounded-full p-2 transition-all duration-300'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              )}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center space-x-2">



        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500" onClick={handleBuscador}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

          <svg
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <h2 className="text-green-600">{auth.nombre}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
               
        </div>
      </nav>
    
    </header>
  );
};

export default Header;
