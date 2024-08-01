import React from 'react'
import { useDispatch } from 'react-redux'
import { requestVideos } from '../utils/appSlice';

const Buttons = ({name}) => {

    const dispatch = useDispatch();
    return (
        <button className='bg-gray-200 px-3 py-1 rounded-lg my-2 mx-1 ' onClick={(e)=>{dispatch(requestVideos(e.target.value))}} value={name}>{name}</button>
    )
}

export default Buttons;