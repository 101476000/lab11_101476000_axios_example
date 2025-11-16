import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

export default function FetchExample() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Random Users (Fetch API)</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, idx) => (
            <tr key={idx}>
              <td><img src={p.picture.thumbnail} alt="" /></td>
              <td>{p.name.first} {p.name.last}</td>
              <td>{p.email}</td>
              <td>{p.location.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
