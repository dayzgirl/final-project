import { Navbar } from 'react-bootstrap';
import './App.css';
import singlePost from './components/Single-post/single-post';
import Posts from './components/Posts/posts';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className='App'>App</div>
      <Navbar />
      <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Posts} path="/posts" exact />
          <Route component={singlePost} path="/posts/:postId" />
          <Route component={Contact} path="/contact" />
      </Switch>
      <Footer/>
  )
}

export default App;
