import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import SearchResults from './pages/search-results/search-results';
import MyLikes from './pages/my-likes/my-likes';
//import CategoryPage from './pages/category/category';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">    
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/results' component={SearchResults} />
          <Route path='/my-likes' component={MyLikes} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
