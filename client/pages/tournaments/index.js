import React from 'react';
import api from '../../api';


class Tournaments extends React.Component {
  constructor(props){
    super(props);
    this.state = { items : [] };
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount(){
    this.getAll();
  }

  getAll(){
    this.setState({isLoading: true})
    api.tournaments.get()
    .then(({data}) => this.setState({items:data, isLoading: false}))
    .catch(err => this.setState({isLoading: false}));
  };

  displayItems(items){
    if(!items || !items.length ) return "no results";
    return (
     <ul>{items.map((x, index) => <li key={index}>{x.name}</li>)}</ul>
    )
  }

  render(){
    const { items, isLoading }  = this.state;
    return (
      <div>
        Tournamnts:
        <div>{isLoading ? "loading" : this.displayItems(items)}</div>
      </div>
    );
  }
}

export default Tournaments;