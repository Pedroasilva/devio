import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import api from './config/Api'
import { useEffect, useState } from 'react';
import { Header } from './Header';

function App() {

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

    <div>
      <Header/>
      { 
        produtos ? produtos.map(item => {
          return <p>{ item.nome }</p>
        }) : null
      }
    </div>
  )
}

export default App
