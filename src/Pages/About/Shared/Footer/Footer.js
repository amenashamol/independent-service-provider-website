import React from 'react';

const Footer = () => {
    const today=new Date()
    const year =today.getFullYear()
    return (
        <div className='bg: primary'>
            <footer className='text-center mt-5'>
                <p><small>copyright @ {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;