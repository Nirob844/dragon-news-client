import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>side nav</h2>
                    </Col>
                    <Col>
                        <Outlet></Outlet>
                    </Col>
                    <col>
                        <h2>right side nav</h2>
                    </col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;