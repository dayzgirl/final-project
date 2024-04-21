import './App.css';

import { Route, Switch } from "react-router-dom";

import singlePost from './components/Single-post/single-post';
import Posts from './components/Posts/posts';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Navbar from './components/Nav/navbar'
import Footer from './components/Footer/footer'
import CreatePostModal from './components/Modals/createpostmodal';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Posts} path="/posts" exact />
          <Route component={singlePost} path="/posts/:postId" />
          <Route component={Contact} path="/contact" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
