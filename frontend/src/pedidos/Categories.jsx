import { Card, Col, Image, Row } from "react-bootstrap";

export function Categories(){
    return(
        <>
            <Row>
                <Col xs={12}>
                    <b>Categorias</b>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    Navege por categoria
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={12} md={3} className="mb-2">
                    <Card body className="text-center shadow">
                    <div><Image src="/icons/combos.png" fluid="true" width="45%" height="auto"></Image></div>
                        <b>Combos</b>
                    </Card>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <Card body className="text-center shadow">
                        <div><Image src="/icons/acompanhamentos.png" fluid="true" width="55%" height="auto"></Image></div>
                        <b>Acompanhamentos</b>
                    </Card>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <Card body className="text-center shadow">
                        <div><Image src="/icons/bebidas.png" fluid="true" width="30%" height="auto"></Image></div>
                        <b>Bebidas</b>
                    </Card>
                </Col>
                <Col xs={12} md={3} className="mb-2">
                    <Card body className="text-center shadow">
                        <div><Image src="/icons/sobremesas.png" fluid="true" width="40%" height="auto"></Image></div>
                        <b>Sobremesas</b>
                    </Card>
                </Col>
            </Row>
        </>
    );
}