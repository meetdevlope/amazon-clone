import React, {useState} from 'react';
import '../style.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineUser} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'


function Header() {

const [active, setactive] = useState(false)

const HamburgerClick = () => {
  setactive(prev => !prev);
}


  return (
    <div className={`flex justify-between items-center dark-blue py-3 px-8 ${active?'menu-active':null}`}>
      <GiHamburgerMenu className="text-white hidden mr-4 md:block z-20" fontSize="1.8rem" onClick={HamburgerClick} />
      <div className="backdrop h-screen w-screen bg-black absolute z-10 left-0 bottom-0 md3:hidden">
        <RiCloseLine className='text-4xl text-white font-bold absolute right-10 top-10' onClick={HamburgerClick} />
      </div>

        <div className="mobile-menu h-screen fixed left-0 bottom-0 z-30 w-3/4 bg-white transition-transform ease-in -translate-x-full md3:hidden" >
          <div className='dark-blue h-1/4 flex flex-col justify-between p-5' >
            <h1 className='text-white self-end flex gap-2 items-center'>Sign in <AiOutlineUser className='text-white' /></h1>
            <h1 className='text-white text-2xl' > <h1 className='text-lg' ><strong>Browse</strong></h1> Amazon</h1>
          </div>
          <div className='p-8 mt-4' >
            <div className='flex flex-col gap-6 text-lg border-b-4 pb-5' >
              <h1 className='font-bold text-xl mb-2' >Top Categories</h1>
              <p>Mobiles</p>
              <p>Clothing</p>
              <p>Footwear</p>
              <p>Electronic</p>
            </div>
            <div className='flex flex-col gap-6 text-lg' >
              <h1 className='font-bold text-xl mb-2 mt-6' >Program's & Features</h1>
              <p>Today's deal</p>
              <p>Amazon pay</p>
              <p>Sell on Amazon</p>
              <p>Try Prime</p>
            </div>
          </div>
      </div>
      <div className="logo-container">
        <img src="/Assets/Amazon_logo.svg" alt="logo" className="h-7 md:h-6" />
      </div>
      <form className="search-bar flex flex-1 mx-6 items-stretch">
        <input type="text" className="w-full border-0 h-9 rounded-l-md" />
        <div className="search-container flex items-center p-1 yellow-color rounded-r-md">
          <SearchIcon fontSize="medium" />
        </div>
      </form>
      <div className="flex flex-col mx-6 md:hidden">
        <small className="text-white">Hello User,</small>
        <strong className="text-white">Sign In</strong>
      </div>
      <div className="flex flex-col mx-6 md:hidden">
        <small className="text-white">Returns &</small>
        <strong className="text-white">Orders</strong>
      </div>
      <div className="cart flex gap-2 justify-center">
        <p className="text-orange-400 text-2xl md:text-xl">0</p>
        <ShoppingCartOutlinedIcon className="text-white" fontSize="large" />
      </div>
    </div>
  );
}

export default Header;
