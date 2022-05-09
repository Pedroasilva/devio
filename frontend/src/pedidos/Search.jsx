import { Col, Form, Row } from 'react-bootstrap';

export function Search(){
    return(
        <>
            <Form className="mb-5">
                <Row>
                    <Col xs={12} md={3} >
                        <Form.Control
                            type="text"
                            id="productSearch"
                            placeholder="O que você procura?"
                        />
                    </Col>
                </Row>
            </Form>
        </>
    )
};