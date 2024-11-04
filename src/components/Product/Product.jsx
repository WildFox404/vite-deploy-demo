import { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import { Outlet } from 'react-router-dom';


const heightStyle = {
    height: `calc(100vh - 65.6px)`,
};

const Product = () => {
    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row ">
            <div className="basis-1/6 relative bg-menu-bg items-center justify-center flex" style={heightStyle}>
                <Menu />
            </div>
            <div className="basis-5/6 relative bg-green-500 items-center justify-center flex" style={heightStyle}>
                <div className=' bg-menu-bg w-full h-full overflow-y-auto text-slate-50 border-r-2 border-white'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Product;