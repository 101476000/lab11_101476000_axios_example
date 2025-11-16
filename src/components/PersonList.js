import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PersonList.css";

export default class PersonList extends Component {
  state = { persons: [] };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        this.setState({ persons: res.data.results });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container my-4">
        <div className="header-bar text-center mb-3">
          <h2 className="mb-0 py-2 text-white">User List</h2>
        </div>

        {this.state.persons.map((p, index) => (
          <div className="card user-card p-3" key={index}>
            <div className="row g-0">
           
              <div className="col-md-3 text-center d-flex flex-column align-items-center">
                <img
                  src={p.picture.large}
                  alt={`${p.name.first} ${p.name.last}`}
                  className="user-img mb-2"
                />
                <button className="btn btn-primary mt-2">Details</button>
              </div>

              <div className="col-md-9">
                <h5>{p.name.title} {p.name.first} {p.name.last}</h5>
                <p><strong>User Name:</strong> {p.login.username}</p>
                <p><strong>Gender:</strong> {p.gender.toUpperCase()}</p>
                <p><strong>Time Zone Description:</strong> {p.location.timezone.description}</p>
                <p><strong>Address:</strong> {`${p.location.street.number} ${p.location.street.name}, ${p.location.city}, ${p.location.state}, ${p.location.country} - ${p.location.postcode}`}</p>
                <p><strong>Email:</strong> {p.email}</p>
                <p><strong>Birth Date and Age:</strong> {p.dob.date.substring(0,10)} - {p.dob.age}</p>
                <p><strong>Register Date:</strong> {p.registered.date.substring(0,10)}</p>
                <p><strong>Phone:</strong> {p.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
