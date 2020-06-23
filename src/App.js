
import './App.css';
import React, { Component } from 'react'
import Post from './components/Post';
import Addpost from './components/Addpost';

export default class App extends Component {

    state= {post:[ {name:'a' ,info:'aa...'},{name:'b' ,info:'bb...'}, {name:'c' ,info:'cc...'}]}


Addpost=(n,i)=>{
  this.setState({post: [{name:n,info:i} ,...this.state.post]})
}

deletePost=(i)=>{
let tempPost=this.state.post.filter((element,index)=>(index!=i))

  this.setState({post:tempPost})
}
  render() {
    
    return (
      <div className="App">
<Addpost Add={this.Addpost}/>
    {this.state.post.map((item,i)=>{
      return <Post key={i} name={item.name} info={item.info} del={this.deletePost} index={i}/>
    })}
      </div>
    )
  }
}
