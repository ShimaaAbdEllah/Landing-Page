import React from 'react'
import { color } from '../../colors/colors'

const OrangeArrow = () => {
    return (
        <div style={{display:'flex', width:'100%', height:'50px', justifyContent:'center'}}>
            <span style={{display:'flex', justifyContent:'flex-start', width:'80%',fontSize:'80px', fontWeight:'bold', color:color.orange,position:'relative', alignSelf:'center'}}>🡥</span>
        </div>
    )
}

export default OrangeArrow
