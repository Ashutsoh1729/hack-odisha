import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
    <>
      <div className="flex flex-col ">
      <header><Navbar/></header>
      <main className="flex-grow">
        <div className="my-20  w-full overflow-hidden">
         {children}
         <ToastContainer/>
        </div>
      </main>
      <footer className='justify-end'>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default Layout
