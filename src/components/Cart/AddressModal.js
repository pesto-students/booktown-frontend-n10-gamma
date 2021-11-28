import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { Address } from './styledComponents';

function AddressModal({ show, onHide }) {
  return (
    <Address>
      <Modal size="lg" show={show}>
        <Modal.Header closeButton onClick={onHide}>
          <Modal.Title>Please enter your address</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Group controlId="First_Name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your First Name "
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Last_Name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Last Name "
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="First_Name">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Email Address"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Last_Name">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Phone Number"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="First_Name">
                  <Form.Label>Current Address</Form.Label>
                  <Form.Control
                    rows={3}
                    as="textarea"
                    placeholder="Your Current Address"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button className="closeButton" onClick={onHide} variant="dark">
            Close
          </Button>
          <Button className="payButton" onClick={onHide} variant="dark">
            Proceed to Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </Address>
  );
}

export default AddressModal;
