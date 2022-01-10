import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'

import './XucXacItem.css'

export default function GameBauCua() {
    return (
        <div id='GameBauCua' className='container-fluid' style={{marginTop:0}}>
            <DiemCuoc/>
            <div className='row mt-5'>
                <div className='col-8'>
                    <DanhSachCuoc/>
                </div>
                <div className='col-4'>
                    <DanhSachXucXac/>
                </div>
            </div>
        </div>
    )
}
