import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring'

export default function QuanCuoc(props) {
    const { quanCuoc } = props;
    const dispatch = useDispatch();

    const [propsUseSpringIncrease,setIncrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset: true,
        }
    })

    const [propsUseSpringDecrease,setDecrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset: true
        }
    })

    return (
        <div className='mt-3'>
            <img src={quanCuoc.hinhAnh} style={{ width: 250 }} />
            <div className='bg-success mt-2 pb-2 text-center' style={{ borderRadius: '10%', width: 250 }}>
                <animated.button
                    style={{ transform: propsUseSpringIncrease.scale.interpolate(scale => `scale(${scale})`) }}
                    onClick={() => {
                        setIncrease({ scale: 1 })
                        setIncrease({ scale: 1.25 })
                        dispatch({
                            type: 'DAT_CUOC_BAU_CUA',
                            quanCuoc,
                            // true là tăng
                            tangGiam: true
                        })
                    }}
                    className='btn btn-danger mr-3'>
                    <i className='fa fa-plus'></i>
                </animated.button>
                <span className='mt-2' style={{ color: 'yellow', fontSize: 25 }}>{quanCuoc.diemCuoc}</span>
                <animated.button
                style={{ transform: propsUseSpringDecrease.scale.interpolate(scale => `scale(${scale})`) }}
                    onClick={() => {
                        setDecrease({ scale: 1 })
                        setDecrease({ scale: 1.25 })
                        dispatch({
                            type: 'DAT_CUOC_BAU_CUA',
                            quanCuoc,
                            // false là giảm
                            tangGiam: false
                        })
                    }}
                    className='btn btn-danger ml-3'>
                    <i className='fa fa-minus'></i>
                </animated.button>
            </div>
        </div>
    )
}
