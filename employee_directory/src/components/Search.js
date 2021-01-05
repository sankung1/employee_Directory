import React from "react";
import {Form, Button} from "react-bootstrap";

function Search(props){
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            onChange={props.handleInputChange}
            name="search"
            placeholder="Search for an Employee"
            id="search"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Search
        </Button>
      </Form>
    );
}

export default Search;