import React from 'react'
import { Link } from "react-router-dom"
import adduser from './../assets/add-user.png';
const Navbar = () => {
    return (
        <>


            <nav className='flex items-center justify-between p-4 max-w-[1280px] mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-lg text-white font-bold'>
                <h1 className='text-[30px]'>Torrent game</h1>

                <ul className='flex items-center gap-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gamespage">Games</Link></li>
                </ul>

                <div className='gap-3  flex items-center'>
                    <input placeholder='search games' className='bg-white/20 border border-white/30 rounded-lg px-4 py-1' type="text" />
                    <button className="bg-[rgba(49, 0, 0, 0.71)] backdrop-blur-lg text-white px-3 py-1 border border-white/30 rounded-lg text-center">Search</button>

                    <Link to="/addgames"><img className='w-10' src={adduser} alt="Add User" /></Link>
                </div>

            </nav>
            <hr className="border-0 h-1 bg-white shadow-[10px_0_10px_#ffffff] mt-5 max-w-[1280px] mx-auto" />


        </>
    )
}

export default Navbar