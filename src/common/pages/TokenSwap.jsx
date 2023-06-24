/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import * as S from './style/Styles'
import NavBar from '../layout/NavBar';
import Nothing from './Nothing';
import { MdArrowBack, MdArrowUpward, MdArrowDownward, MdOutlineSwapVert } from "react-icons/md";


function TokenSwap() {
    const [swapFrom, setSwapFrom] = useState(null);
    const [swapTo, setSwapTo] = useState(null);
    
    return (
        <MainLayout>
            <NavBar title="Swap" backArrow={<MdArrowBack size={18} />} />
            <S.ScrollBar className='w-full h-[450px] overflow-y-scroll'>
                <div className='h-fit w-full flex flex-col gap-2 items-center justify-center pt-4'>
                    {/* <div className='flex w-[100%]  h-fit justify-center text-white'>
                        <div className='flex flex-col w-full p-3 bg-[#01031d] rounded-2xl'>
                            <div className='w-full mx-auto flex '>
                                <div className='w-1/2 h-12'>
                                    <h4 className='font-bold'>HEREDA <span className='text-sm font-thin text-[#707070]'> swapping</span></h4>
                                    <p className='font-bold'><span className='text-sm font-thin text-[#707070] mr-1'> with</span>SHIBA</p>
                                </div>
                                <div className='w-1/2 h-12 flex justify-end'>
                                    <div className='h-10 w-10 rounded-xl overflow-hidden translate-x-3 shadow-[0px_0px_0px_4px_rgb(19,18,18)]'>
                                        <img src="../nfmages/boredApe.png" className='object-cover' alt="" />
                                    </div>
                                    <div className='h-10 w-10 rounded-xl overflow-hidden'>
                                        <img src="../nfmages/boredApe.png" className='object-cover' alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mx-auto flex'>
                                <div className='w-1/2 h-9 flex items-center font-semibold'>Total Price</div>
                                <div className='w-1/2 h-9 flex items-center justify-end text-[#ff2323]'>24.2394 ETH</div>
                            </div>
                        </div>
                    </div>  */}
                    <div className='w-full h-fit relative pt-10 pb-3 flex gap-[15px] flex-col items-center justify-center'>
                        <div id="top-swap" className='h-fit py-4 px-3 w-full rounded-[20px] bg-[#0f1214] border-[3px] border-[#00000000]'>
                            <div className='mb-2 w-full text-[#ddda26] text-sm font-semibold'>
                                <p>PAY</p>
                            </div>
                            <div className='w-full h-fit flex items-center'>
                                <div className='h-10 w-10 rounded-xl overflow-hidden'>
                                    <img src="../nfmages/boredApe.png" className='object-cover' alt="" />
                                </div>
                                <div className='h-fit ml-2 text-white'>
                                    <h3 className='font-bold'>HEREDA</h3>
                                    <p className='text-[12px]'>Price: 260 ETH</p>
                                </div>
                                <div className='h-fif flex-1 flex flex-col items-end text-white'>
                                    <p className='font-bold'>100 {"PCS"}</p>
                                    <p className='text-[12px]'>{''}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center absolute'>
                            <div className='h-10 w-10 flex items-center justify-center bg-[#01d158] rounded-full border-[7px] border-[#0f1214]'>
                                <MdOutlineSwapVert size={20} className='text-white' />
                            </div>
                        </div>
                        <div id="bottom-swap" className='h-fit py-4 px-3 w-full rounded-[20px] bg-[#0f1214] border-[3px] border-[#00000000]'>
                            <div className='mb-2 w-full text-[#1bc467] text-sm font-semibold'>
                                <p>RECIEVE</p>
                            </div>
                            <div className='w-full flex items-center'>
                                <div className='h-10 w-10 rounded-xl overflow-hidden'>
                                    <img src="../nfmages/boredApe.png" className='object-cover' alt="" />
                                </div>
                                <div className='h-fit ml-2 text-white'>
                                    <h3 className='font-bold'>SHIBA</h3>
                                    <p className='text-[12px]'>Price: 260 ETH</p>
                                </div>
                                <div className='h-fif flex-1 flex flex-col items-end text-white'>
                                    <p className='font-bold'>30 {"PCS"}</p>
                                    <p className='text-[12px]'>{''}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] flex items-center justify-center">
                        <button className='py-3 w-[90%] bg-[#01d158] rounded-lg text-white cursor-pointer transition-[.5s] hover:scale-[0.94] font-bold'>SWAP</button>
                    </div>
                </div>
            </S.ScrollBar>
        </MainLayout>
    )
}

export default TokenSwap