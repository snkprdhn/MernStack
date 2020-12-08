import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Travel = props => (
  <tr>
    <td>{props.travel.username}</td>
    <td>{props.travel.destination}</td>
    <td>{props.travel.description}</td>
    <td>{props.travel.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.travel._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTravel(props.travel._id) }}>delete</a>
    </td>
  </tr>
)

export default class TravelsList extends Component {
  constructor(props) {
    super(props);

    this.deleteTravel = this.deleteTravel.bind(this)

    this.state = {travels: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/travels/')
      .then(response => {
        this.setState({ travels: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTravel(id) {
    axios.delete('http://localhost:5000/travels/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      travels: this.state.travels.filter(el => el._id !== id)
    })
  }

  travelList() {
    return this.state.travels.map(currenttravel => {
      return <Travel travel={currenttravel} deleteTravel={this.deleteTravel} key={currenttravel._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Travels</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Destination</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.travelList() }
          </tbody>
        </table>
      </div>
    )
  }
}