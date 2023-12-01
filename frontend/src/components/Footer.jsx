// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='bg-gray-800 items-center flex justify-center '>


//           <img
//             className="custom-img"
//             src="../img/logogray.png"
//             alt="Your Company"
//           />

//           <h1 className='text-white'> </h1>
//         </div>

//   )
// }

// export default Footer

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="mr-4 custom-img"
            src="../img/logogray.png"
            alt="Logo de la empresa"
          />
          <div>
            <h2 className="text-lg font-semibold text-green-500">Aldana & Associates</h2>
            <p>133 Rollins Ave, Rockville, MD 20852, Estados Unidos</p>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Aldana & Associates. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
