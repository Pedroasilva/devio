import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css'
import { Search } from './Search';
import { Categories } from './Categories';
import { Products } from './Products';

function Index() {
  
  return (
    <div>
        <h3>Seja bem vindo!</h3>
        <Search/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Index
