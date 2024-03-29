import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../components/Project";

const AdminPanel = () => {
    return (
        <Container fluid className="mb-3">
            <Row className="text-center">
                <Col>
                    <h1>Projekty</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={8}>
                    <ListGroup>
                        <Project state="accepted"/>
                        <Project state="rejected"/>
                        <Project state="awaiting"/>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;