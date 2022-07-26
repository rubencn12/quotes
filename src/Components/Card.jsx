import React from 'react'

const Card = ({ randomQuote, getRandomAll, randomColor }) => {


    const fontcolor = {
        color: randomColor
    }

    const objBgStyle = {
        backgroundColor: randomColor
    }


    return (
        <div>
            <div className='qt'>
                    <i style={fontcolor} className="fa-solid fa-quote-left"></i>
                    <div className='quote'>
                    <span className='quote' style={fontcolor}>{randomQuote.quote}</span>
                    </div>
            </div>
            <div className='author'>
                <p className='author' style={fontcolor}>{randomQuote.author}</p>
            </div>
        </div>
    )
}

export default Card

// lassName='btn2'