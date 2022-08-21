import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ModifyResult(props) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult();
  }, []);

  let getResult = () => {
    axios
      .get("localhost:8080/result")
      .then((response) => setResult(response.data))
      .catch((err) =>
        props.showAlert("danger", "Error occured to fetch result!")
      );
  };

  let deleteResult = (resultId) => {
    axios.delete("localhost:8080/result/" + resultId).then((response) => {
      if (response.data != null) {
        console.log("Result Deleted successfully!");
        setResult(result.filter((res) => res.id !== resultId));
      }
    });
  };
  return (
    <Container className="mt-3">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Result</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {result.length === 0 ? (
            <tr>
              <td>{result.length} results available!</td>
            </tr>
          ) : (
            result.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.result}</td>
                <td>
                  <ButtonGroup>
                    <Link to={"/result/" + res.id}>
                      <Button size="sm" variant="outline-primary">
                        <FontAwesomeIcon icon="fa-regular fa-arrow-up-right-from-square">
                          Edit
                        </FontAwesomeIcon>
                      </Button>
                    </Link>{" "}
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={deleteResult.bind(this, res.id)}
                    >
                      <FontAwesomeIcon icon={faTrash}> Delete </FontAwesomeIcon>
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default ModifyResult;
