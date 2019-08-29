import React from 'react';
import logo from './logo.svg';
import './App.css';
import objeto from './Post.json';


class Post extends React.Component{
  render(){
    return(
      <div>
        <img className="imagem" src={this.props.url_imagem}></img>
        <div>Titulo: {this.props.titulo}</div>
      </div>
    )
  }
}


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      posts:objeto.posts
    }
  }

  render(){
    return(
      <div className="App">
      {
        this.state.posts.map((post, i) =>
        <Post
          url_imagem={post.url}
          titulo={post.titulo}
        />
        )
      }
      </div> 
    )
   
  }

}

export default App;
