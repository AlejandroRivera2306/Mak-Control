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
