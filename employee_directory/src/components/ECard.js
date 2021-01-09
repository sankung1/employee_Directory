import React from "react";
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function ECard(props){
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.picture} />
        <Card.Body>
          <Card.Title>{props.firstName}</Card.Title>
          <Card.Title>{props.lastName}</Card.Title>
          <Card.Title>{props.email}</Card.Title>
          <Card.Title>{props.phone}</Card.Title>
        </Card.Body>
      </Card>
    );
}

export default ECard;