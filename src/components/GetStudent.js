import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCreditCardAlt,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function GetStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
  });

  let getStudent = () => {
    axios
      .get("http://localhost:4000/app/showAllStudents")
      .then((response) => setStudent(response.data))
      .catch((err) => console.log("Error occured to fetch result!"));
  };

  let deleteResult = (stdId) => {
    axios
      .delete("http://localhost:4000/app/deleteStudent/" + stdId)
      .then((response) => {
        if (response.data != null) {
          console.log("Result Deleted successfully!");
          setStudent(student.filter((res) => res.id !== stdId));
        }
      })
      .catch((err) => console.log("Error occured to delete result!"));
  };
  return (
    <div>
      <Container className="mt-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {student.length === 0 ? (
              <tr>
                <td>{student.length} results available!</td>
              </tr>
            ) : (
              student.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={"/addStudent/" + res.id}>
                        <Button size="sm" variant="outline-primary">
                          <FontAwesomeIcon icon={faEdit}>Edit</FontAwesomeIcon>
                        </Button>
                      </Link>{" "}
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={deleteResult.bind(this, res.id)}
                      >
                        <FontAwesomeIcon icon={faTrash}>
                          {" "}
                          Delete{" "}
                        </FontAwesomeIcon>
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
