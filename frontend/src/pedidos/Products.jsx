import { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import api from "../config/Api";

export function Products(){

    const [produtos, setProdutos] = useState(null); 

    useEffect(() => {
        async function carregarProduto(){
            const produtos = await api.get('produtos');
            const { data } = produtos;
            setProdutos(data.data);
        }

        carregarProduto();

    }, []);

    return (
        <>
            <Row className="mt-5">
                <Col xs={12}>
                    <b>Produtos</b>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    Selecione um produto para adicionar ao seu pedido
                </Col>
            </Row>
            <Row className="mt-4">
                { 
                    produtos ? produtos.map(item => {
                        return (
                            <Col xs={12} md={3} className="mb-5">

                                <Card className="showProduto shadow">
                                    <Card.Body className="text-center p-0">
                                        <div className="bg-success showProduto-top mb-5"><Image src={'/icons/'+item.imagem} fluid="true" width="40%" height="auto"></Image></div>
                                        <b>{item.nome}</b><br></br>
                                        { item.descricao.split(',')[0] }
                                        <p className="mt-3">{ item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</p>
                                    </Card.Body>
                                </Card>

                            </Col>
                        )
                    }) : null
                }
                
            </Row>
        </>
    )
}
