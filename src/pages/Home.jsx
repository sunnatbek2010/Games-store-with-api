import React, { useState, useEffect } from 'react';
import trandicon from './../assets/graph.png';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const apiUrl = import.meta.env.VITE_HOME_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => { fetchData(); }, []);

  return (
    <div className="max-w-[1280px] mx-auto mt-10 h-190 rounded-[30px] bg-center bg-cover p-5" style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/UcXeK6DWKBWdc3Ao4TZ9nU.jpg')" }}>
      <h1 className="text-white text-left font-bold italic text-[90px]">CYBERPUNK 2077: <br />PHANTOM LIBERTY</h1>
      <p className='text-white font-bold text-[20px] mt-40 bg-white/20 backdrop-blur-sm p-2 inline-block rounded-[20px]'>Experience the high-stakes world of es ionage in <br />expansion. Includes all previous DLCs an v2.1 upda assive</p>
      <div>
        <button className="bg-[rgba(49, 0, 0, 0.71)] backdrop-blur-lg text-white px-3 py-1 text-[30px] mt-10 border border-white/30 rounded-lg text-center transition-[2s] hover:backdrop-blur-[0px] hover:font-bold hover:transition-[2s] mr-2">Download now</button>
        <button className="bg-[rgba(49, 0, 0, 0.71)] backdrop-blur-lg text-white px-3 py-1 text-[30px] mt-10 border border-white/30 rounded-lg text-center transition-[2s] hover:backdrop-blur-[0px] hover:font-bold hover:transition-[2s]">Add to Library</button>
      </div>
      <div className='flex items-center mt-40'>
        <img className='w-20 mt-10 rounded-xl' src={trandicon} alt="graph" />
        <h1 className='italic text-white font-bold text-[30px] mt-20'>Trend games</h1>
      </div>


      <div className='flex items-center max-w-[1280px] mt-20 flex-wrap justify-start justify-between gap-2'>
        {
          data?.map((item) => (
            <div className='mt-5 text-center rounded-xl max-w-[300px] min-w-[300px] p-3 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-[2s]' key={item.id}>
              <img className='max-w-[280px]  min-w-[280px] max-h-[350px] min-h-[350px] rounded-xl' src={item.gameurl || item.url} alt={item.gamename} />
              <div className='leading-10'>
                <h2 className='text-white font-bold'><span className='text-white font-bold'>Gamename: </span>{item.gamename}</h2>
                <p className='text-white font-bold'><span className='text-white font-bold'> Windows Version: </span>{item.windowsversion}</p>
                <p className='text-white font-bold'><span className='text-white font-bold'> RAM: </span>{item.ram}</p>
                <p className='text-white font-bold'><span className='text-white font-bold'>Memory: </span>{item.memory}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;
