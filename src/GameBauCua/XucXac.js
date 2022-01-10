import React, { Fragment } from 'react'
import './XucXacItem.css'

export default function XucXac(props) {
    let { xucXac } = props;
    return (
        <Fragment>
            <div className='scene'>
                <div className='cube'>
                    <img className='ml-5 cube__face front ' style={{ width: 50 }} src={xucXac.hinhAnh} />
                    <img className='ml-5 cube__face back ' style={{ width: 50 }} src='./image/bau.png' />
                    <img className='ml-5 cube__face left ' style={{ width: 50 }} src='./image/cua.png' />
                    <img className='ml-5 cube__face right ' style={{ width: 50 }} src='./image/ca.png' />
                    <img className='ml-5 cube__face top ' style={{ width: 50 }} src='./image/nai.png' />
                    <img className='ml-5 cube__face bottom ' style={{ width: 50 }} src='./image/tom.png' />
                </div>
            </div>
        </Fragment>
    )
}
