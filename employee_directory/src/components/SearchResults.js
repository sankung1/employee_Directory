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
    console.log("***in Filter*******");
    console.log(searchkey);
    console.log(this.state.result);
    // this.state.result = this.state.result.filter(this.state.result => this.state.result.includes(searchkey));
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
    console.log("**********");
    console.log(value);
    console.log(name);
    //filter function here
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
    console.log("**********");
    console.log(value);
    console.log(name);
    //filter function be called here
    // this.filterEmployees(value);
    // this.filterEmployees(this.state.search);
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
            <Col sm={6}>
              {[...this.state.result].map((item) => (
                <ECard
                  picture={item.picture}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  phone={item.phone}
                  key={item.key}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchResults;