import React from 'react';
const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* Text */}
          <a href="#">
            <h1 className='h3 -m-3 mx-0 px-0 font-bold text-accent'>SAIR</h1>
            <h1 className='h3 mx-0'>ULLAH</h1>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>

        </div>
      </div>
    </header>
  );
};

export default Header;
