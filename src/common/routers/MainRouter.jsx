/* eslint-disable no-unused-vars */
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Governance from '../pages/Governance'
import NotFound from '../pages/NotFound'
import Activities from '../pages/Activities'
import ProgressBar from "../pages/ProgressBar"
import SendHadera from '../pages/SendHadera'
import Nfts from '../pages/Nfts'
import NftSwap from '../pages/NftSwap';
import TokenSwap from '../pages/TokenSwap';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Login from '../pages/Login';
function MainRouter() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/home' element={<Home />} />
                <Route path='/tokenSwap' element={<TokenSwap />} />
                <Route path='/nftswap' element={<NftSwap />} />
                <Route path='/tokenswap' element={<TokenSwap />} />
                <Route path='/activities' element={<Activities />} />
                <Route path='/send' element={<SendHadera />} />
                <Route path='/nfts' element={<Nfts />} />
                {/* <Route path='/progress' element ={<ProgressBar/>} />  */}
                <Route path='/governance' element={<Governance />} />
            </Routes>
        </MemoryRouter>
    )
}

export default MainRouter