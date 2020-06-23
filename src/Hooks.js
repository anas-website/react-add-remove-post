import React , { useState}from 'react'

export default function Hooks() {

const [flag,setflag]=useState(false)
    return (
        <div>
           <h1>hooks</h1> 
        <button onClick={ ()=>{setflag(!flag)}}> Change flag </button> 
            {flag.toString()} 
        </div>
    )
}
