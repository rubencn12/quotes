import React from 'react'

const TheButton = ({getRandomAll, objBgStyle}) => {


    return (
        <div className='btn'>
            <button onClick={getRandomAll} className='btn2' style={objBgStyle}>↻</button>
        </div>


    )
}

export default TheButton