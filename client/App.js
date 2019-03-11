import React from 'react';
import Navbar from './core/Navbar';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory }  from 'react-router';
import configureStore from './configureStore';
import HomePage from './pages/home';
import TournamentsPage from './pages/tournaments';
import TeamsPage from './pages/teams';
import PlayersPage from './pages/players';


class App extends React.Component {
  render(){
    return (
      <div style={{'border':'1px solid grey','backgroundColor':'grey'}}>
        <Navbar />
        <div className="container">
					 { this.props.children }
				</div>
      </div>  
    );
  }
}

class AppWrapper extends React.Component {

  render(){
    return (
      <Provider store={configureStore()}>
      <Router history={hashHistory}>
           <Route component={App}>
            <Route path="/" component={HomePage} />
            <Route path="/tournaments" component={TournamentsPage} />
            <Route path="/teams" component={TeamsPage} />
            <Route path="/players" component={PlayersPage} />
          </Route>
      </Router>
    </Provider>
    );
  };
}

export default AppWrapper; 