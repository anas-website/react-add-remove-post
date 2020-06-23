import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)

        this.state={index:props.index}
    }


    render() {
        
        
        return (
            <div style={{backgroundColor:'gray' ,width:'800px' ,height:'150px'  ,margin:'auto',}} >
     
            <h2  >title:{this.props.name} </h2>   
            <h3  >info:{this.props.info} </h3>  
            <button onClick={ ()=>this.props.del(this.state.index)} style={{color:'red'} }>x</button> 

            </div>
        )
    }
}

