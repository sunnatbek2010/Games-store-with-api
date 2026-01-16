import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gamespage = () => {

    const [data, setData] = useState(null);

    const apiUrl = import.meta.env.VITE_GAMES_URL;
    async function fetchData() {
        try {
            const response = await axios(apiUrl);
            const jsonData = await response.data;
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);




    return (

        <div className='flex items-center mx-auto max-w-[1280px] mt-20 flex-wrap justify-between'>
            {
                data?.map((item) => (
                    <div className='flex items-center mt-5 rounded-xl max-w-[500px] min-w-[500px] justify-center gap-7 p-3 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-[2s]' key={item.id}>
                        <img className='max-w-[200px] rounded-xl' src={item.gameImg} alt="" />
                        <div className='max-w-[50%] min-w-[50%] leading-10'>
                            <h2 className='text-white font-bold'><span className='text-gray-500 font-bold'>Gamename: </span>{item.gameName}</h2>
                            <p className='text-white font-bold'><span className='text-gray-500 font-bold'>Genre: </span>{item.gameJanr}</p>
                            <p className='text-white font-bold line-clamp-2'><span className='text-gray-500 font-bold'>Game Description: </span>{item.gameDesc}</p>
                            <p className='text-white font-bold'><span className='text-blue font-gray-500'>Year: </span>{item.gameYear}</p>
                            <Link to={`/gamedetail/${item.id}`} className="text-white font-bold bg-white/5 px-2 rounded-xl cursor-pointer inline-block text-center">
                                Show more
                            </Link>
                        </div>



                    </div>
                ))

            }



        </div>
    )
}

export default Gamespage