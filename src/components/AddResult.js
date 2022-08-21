import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

function AddResult(props) {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [result, setResult] = useState();

  const { resultId } = useParams();

  let txtChng = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
      console.log(id);
    } else if (e.target.name === "name") {
      setName(e.target.value);
      console.log(name);
    } else if (e.target.name === "result") {
      setResult(e.target.value);
      console.log(result);
    }
  };

  let Result = {
    id: id,
    name: name,
    result: result,
  };

  let saveStudent = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/result", Result)
      .then((response) => {
        if (response.data != null) {
          props.showAlert("success", "Result added successfully!");
        }
      })
      .catch((err) => {
        props.showAlert("danger", "Error occured to add result!");
      });
  };

  let updateStudent = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8080/result/" + resultId, Result)
      .then((response) => {
        if (response.data != null) {
          props.showAlert("success", "Result updated successfully!");
        }
      })
      .catch((err) =>
        props.showAlert("danger", "Error occured to update result!")
      );
  };

  return (
    <div>
      <Container className="mt-3">
        <Form onSubmit={resultId != null ? updateStudent : saveStudent}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Id</Form.Label>
            <Form.Control
              name="id"
              value={id}
              type="text"
              placeholder="Enter Id"
              onChange={txtChng}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={txtChng}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Result</Form.Label>
            <Form.Control
              name="result"
              value={result}
              type="text"
              placeholder="Enter Result"
              onChange={txtChng}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {resultId != null ? "Update" : "Submit"}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddResult;
