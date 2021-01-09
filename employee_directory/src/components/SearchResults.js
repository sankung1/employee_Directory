import React, { Component } from "react";
import Search from "./Search";
import ECard from "./ECard";
import getUsers from "../API/api";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchResults extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: "",
  };
  componentDidMount() {
    getUsers
      .search()
      .then((res) => {
        console.log(res);
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }
  filterEmployees = (searchkey) => {
    var filterResult = this.state.result.filter(
      (person) => person.firstName === searchkey
    );

    this.setState({
      result: filterResult,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.filterEmployees(value);
    this.setState({
      [name]: value,
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12}>
              <h1>Employee Directory</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Search>
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              </Search>
            </Col>
          </Row>
          <Row>
            {[...this.state.result].map((m) => (
              <Col sm={4}>
                <ECard
                  picture={m.picture}
                  firstName={m.firstName}
                  lastName={m.lastName}
                  email={m.email}
                  phone={m.phone}
                  key={m.key}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchResults;