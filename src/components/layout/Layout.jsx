import React from 'react';
import Footer from '../share/Footer';
import Navbar from '../share/Navbar';

const Layout = ({ title, children }) => {
    { document.title = title ? title + "Jawelar" : "Jawelar App" }
    return (
        <>
            <div className=" d-flex justify-content-between flex-column  min-vh-100">
                <header>

                    <Navbar />
                </header>
                <main className=" ">
                    {children}
                </main>
                <footer className="d-flex h-10 justify-content-center items-content-center shadow-inner">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Layout;