import React, { useState, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import QrCode from "./QRCODE";
import axios from "axios";
import StaticNavBar from "./StaticNavBar";

export default function Public() {
  const productIdRef = useRef();
  const [idState, setIdState] = useState(""); // Changed from setidState to setIdState
  const [loading, setLoading] = useState(true);
  const [responseState, setResponseState] = useState("");

  function getData(data) {
    setIdState(data);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(idState);
    const response = await axios.post("/backend/public", {
      product_id: idState,
    });
    const x = response.data.map((userDetails) => (
      <div className="text-center" key={userDetails.id}>
        <div>
          <strong>Name:</strong> {userDetails.name} <strong>Role:</strong>{" "}
          {userDetails.role} <strong>Location:</strong>: {userDetails.location}{" "}
          <strong>Date:</strong> {userDetails.date}
        </div>
      </div>
    ));
    setResponseState(x);
  }

  // Handle input change
  function handleInputChange(e) {
    setIdState(e.target.value); // Update idState with the input value
  }

  return (
    <div>
      <StaticNavBar />
      <h1 className="header text-center"> Welcome Customer!</h1>
      <div className="mt-4 fs-5 text-center ">
        To check for authenticity, scan using QR Code or enter product ID.
      </div>
      <br />
      <br />
      <div>
        <Form
          className="d-grid absolute-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label className="text-center">Product ID :</Form.Label>
            <Form.Control
              className="w-100"
              type="text"
              ref={productIdRef}
              value={idState}
              placeholder="Enter Product ID"
              onChange={handleInputChange} // Add onChange event handler
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "15rem",
              margin: "20px",
              backgroundColor: "#0cb097",
              color: "white",
            }}
          >
            Submit
          </Button>
          <div className="text-center">{responseState}</div>
        </Form>
      </div>
      <br />
      {loading && (
        <Card
          className="container mt-lg-5 mb-lg-5"
          style={{ height: "400px", width: "400px" }}
        >
          <Card.Header className="bg-white">
            <h1 className="text-center">SCAN QR CODE</h1>
          </Card.Header>
          <Card.Body>
            <div className="h-50 w-100 mt-2">
              <QrCode xd={getData} />
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

