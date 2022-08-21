import { Alert } from "react-bootstrap";
import React from "react";

function MyAlert(props) {
  return (
    props.alert && (
      <Alert variant={props.alert.type}>{props.alert.message}</Alert>
    )
  );
}

export default MyAlert;
