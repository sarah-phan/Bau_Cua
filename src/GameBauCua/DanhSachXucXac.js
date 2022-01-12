import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXucXac(props) {
    const mangXucXac = useSelector (state => state.GameBauCuaReducer.mangXucXac)
    const dispatch = useDispatch();

    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{ width: 300, height: 300, borderRadius: 150, paddingLeft:10 }}>
                <div className='row' style={{width: 100}}>
                    <div className='col-12' style={{ marginTop:0, marginLeft:65 }}>
                        <XucXac key={Date.now()} xucXac = {mangXucXac[0]}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5'>
                        <XucXac key={Date.now()} xucXac = {mangXucXac[1]}/>
                    </div>
                    <div className='col-7'>
                        <XucXac key={Date.now()} xucXac = {mangXucXac[2]}/>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:'32%', marginTop: '5%'}}>
                <button 
                onClick={() => {
                    dispatch({
                        type: 'PLAY_GAME_BAU_CUA'
                    })
                }}
                className='btn btn-success p2' style={{fontSize: 25}}>
                    Xốc
                </button>
            </div>
        </div>
    )
}
