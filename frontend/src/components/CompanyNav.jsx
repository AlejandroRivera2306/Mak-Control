import React from 'react';

const CompanyNav = ({ activeTab, onTabClick }) => {
  return (
    <header className="border-gray-900/10">
      <nav className="container mx-2 flex items-center justify-between p-3">
        <div className="flex items-center space-x-4"></div>
        <ul className="flex space-x-4 text-1xl font-bold leading-9 tracking-tight text-gray-900">
          {['Information', 'Partners', 'Bankset', 'Staff', 'Services', 'Assigned Staff'].map((tab) => (
            <li key={tab}>
              <button
                className={`text-slate-600 focus:text-gray-700 border border-gray-300 rounded-full p-1 ${activeTab === tab ? 'bg-green-600 text-gray-50' : 'hover:text-slate-700 hover:bg-green-100'
                  }`}
                onClick={() => onTabClick(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default CompanyNav;
