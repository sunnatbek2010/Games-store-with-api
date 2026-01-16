import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import returnimg from './../assets/return.png';
const Gamedatail = () => {

  const navigate = useNavigate();

  const { id } = useParams()
  const apigame = import.meta.env.VITE_GAMES_URL;
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(`${apigame}/${id}`);
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [id]);


  return (
    <>
      <div className='flex items-center leading-16 max-w-[1280px] mx-auto p-4 gap-8 mt-10 '>
        <div className='bg-white/10 p-4 max-h-140 min-h-140 flex items-center rounded-xl border border-[3px] border-white/10 backdrop-blur-lg'>
          <img className='max-w-85 min-w-85 rounded-xl' src={data?.gameImg} alt={data?.gameName} />
        </div>
        <div className='max-h-140 min-h-140 bg-white/10 px-4 rounded-xl border border-[3px] border-white/10 backdrop-blur-lg'>
          <div className='justify-between flex items-center'>
            <h1 className='text-white font-bold'><span className='text-gray-500'>Name: </span> {data?.gameName}</h1>
            <button onClick={() => navigate(-1)}>
              <img className="w-10 cursor-pointer" src={returnimg} alt="Return" />
            </button>
          </div>
          <h3 className='text-white font-bold'><span className='text-gray-500'>Year: </span> {data?.gameYear}</h3>
          <h3 className='text-white font-bold'><span className='text-gray-500'>Description: </span> {data?.gameDesc}</h3>
          <h3 className='text-white font-bold'><span className='text-gray-500'>Genre: </span> {data?.gameJanr}</h3>
        </div>

      </div>
    </>
  )
}

export default Gamedatail