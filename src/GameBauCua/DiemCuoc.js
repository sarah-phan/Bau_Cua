import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {
    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)
    const dispatch = useDispatch();

    return (
        <div>
            <h3 className='text-center display-4' style={{color: '#58FA58'}}>Game Bầu Cua</h3>

            <div className='text-center mt-5'>
                <span style={{fontSize: '20px',borderRadius:'5%'}} className='p-3 text-white bg-danger'>
                    Tiền thưởng: <span className='text-warning'>${tongDiem.toLocaleString()}</span>
                </span>
            </div>

            <div className='text-center mt-5'>
                <button 
                style={{fontSize: '17px', borderRadius: '5%', border: 'none'}} 
                className='p-3 text-white bg-success'
                onClick={() => {
                    dispatch({
                        type: 'CHOI_LAI'
                    })
                }}
                >
                    Chơi lại
                </button>
            </div>
        </div>
    )
}
