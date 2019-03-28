import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TopMenu } from './Components/Menu/TopMenu';
import { NewPost } from './Components/Post/NewPost';
import { Post } from './Components/Post/Post';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postsCount: posts.count
    }
    this.pushNewPost = this.pushNewPost.bind(this);
  }

pushNewPost = (message) => {
    posts.push({
      author: "Vadidya",
      text: message,
      image: "https://pp.userapi.com/c852128/v852128492/6ada6/DyeTyyM7oRM.jpg"
    });
    this.setState({
      postsCount:posts.count
    })


}



  render() {
    return (
      <div className = "container">
      <TopMenu />
      <NewPost send={this.pushNewPost}/>
      {posts.slice(0).reverse().map((post, index) => { 
return <Post key={index} author={post.author} text={post.text} image={post.image} /> 
})}
      
      <div className="notification">
        
      </div>
      </div>
    );
  }
}
const posts = [
  {
      author: "Putin",
      text: "Хочу НОЛОГ",
      image: "https://pp.userapi.com/c849424/v849424805/df75d/M2qPObz3f5I.jpg"
  },
  {
      author: "Нэвельный",
      text: "ПЕРЕХОЧЕШЬ",
      image: "https://pp.userapi.com/c847220/v847220835/15210c/9kYvk0fMfBc.jpg"

  },

  {
    author: "OBAMA",
    text: "Был бы я человеком...",
    image: "https://pp.userapi.com/c849336/v849336971/dab34/AvK6D4nQ6QE.jpg"
  },
  {
    author: "Дочка обамы",
    text: "меня там ебут где-нибудь там в оксфорде",
    image: "https://pp.userapi.com/c850328/v850328041/932a7/S4aadphZmFM.jpg"
  }
  

]

export default App;
