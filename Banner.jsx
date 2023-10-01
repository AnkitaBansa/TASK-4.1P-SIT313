import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const style = {
    width:"100%",
}

function Banner(){
    return(
        <div className='banner'>
            <div style ={center}>
                <img style={style} src="https://cdn.pixabay.com/photo/2015/04/23/12/32/hell-735995_1280.jpg" alt="library"></img>
            </div>
        </div>
    )
}

export default Banner;