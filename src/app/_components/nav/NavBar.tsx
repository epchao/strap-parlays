import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className='flex justify-center align-center p-10'>
      <Link href='/'>
        <p className='text-3xl tracking-tighter font-bold hover:text-green-500 transition-colors duration-500 ease-in-out'>
          $TRAP PARLAYS
        </p>
      </Link>
    </header>
  );
};

export default NavBar;