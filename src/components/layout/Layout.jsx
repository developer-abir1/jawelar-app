import React from 'react';
import Footer from '../share/Footer';
import Navbar from '../share/Navbar';

const Layout = ({title , children}) => {
         {document.title = title ? title +"Jawelar" : "Jawelar App"}
    return (
        <>
        <header>
       
            <Navbar/>
        </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;