import { Navbar,Container, Nav } from 'react-bootstrap';

export function Header(){
    return  <Navbar bg="success" expand="lg" sticky="top">
                <Navbar.Brand href="#pedidos" className="text-white">
                    <div id="logoNav">
                        <img src="/icons/logo.png" />
                    </div>
                    fastfood
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end me-auto">
                    <Nav id="itensNavBar" variant="pills" defaultActiveKey="#pedidos">
                        <Nav.Link href="#pedidos" className="text-white">Pedidos</Nav.Link>
                        <Nav.Link href="#cozinha" className="text-white">Cozinha</Nav.Link>
                        <Nav.Link href="#retirada" className="text-white">Retirada</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
}
