import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Header } from './Header';
import { Container } from 'react-bootstrap';
import Index from './pedidos/Index';

function App() {
  
  return (

    <div>
      <Header/>
      <Container className="mt-5">
        <Index/>
      </Container>
    </div>
  )
}

export default App
