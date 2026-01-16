import React from 'react'
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Gamespage from './pages/Gamespage.jsx';
import Gamedatail from './pages/Gamedatail.jsx';
import Addgames from './pages/Addgames.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gamespage" element={<Gamespage />} />
          <Route path="/gamedetail/:id" element={<Gamedatail />} />
          <Route path="addgames" element={<Addgames />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App