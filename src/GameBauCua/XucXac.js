import React, { Fragment } from 'react'
import './XucXacItem.css'
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {
    let { xucXac } = props;

    const [propsDice, set] = useSpring(() => ({
        to: {
            xyz: [360, 360, 360]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: {
            duration: 1000
        },
        reset: true, 
    }))
    set({xyz:[360,360,360]})
    return (
        <Fragment>
            <div className='scene ml-5'>
                <animated.div
                style={{ transform: propsDice.xyz.to((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`),...propsDice, }}
                className='cube'>
                    <div className='cube__face front '>
                        <img style={{ width: '100%' }} src={xucXac.hinhAnh} />
                    </div>
                    <div className='cube__face back '>
                        <img style={{ width: '100%' }} src='./image/bau.png' />
                    </div>
                    <div className='cube__face left ' >
                        <img style={{ width: '100%' }} src='./image/cua.png' />
                    </div>
                    <div className='cube__face right '>
                        <img style={{ width: '100%' }} src='./image/ca.png' />
                    </div>
                    <div className='cube__face top '>
                        <img style={{ width: '100%' }} src='./image/nai.png' />
                    </div>
                    <div className='cube__face bottom ' >
                        <img style={{ width: '100%' }} src='./image/tom.png' />
                    </div>
                </animated.div>
            </div>
        </Fragment>
    )
}
