
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Card, Button} from 'react-bootstrap'
import Country from './components/countries'
import Service from './components/cards'
import './App.css';

const cities = [
  {src:'imgs/tunis.webp', name:"Tunis"},
  {src:'imgs/marsa.jpg', name:"Marsa"},
  {src:'imgs/kelibia.webp', name:"Kelibia"},
  {src:'imgs/hamammet.jpg', name:"Yasmine Hammamet"},
  {src:'imgs/hamamet-sud.webp', name:"Hammamet Sud"},
  {src:'imgs/hergla.jpg', name:"Hergla"},
  {src:'imgs/korba.webp', name:"Korba"},
  {src:'imgs/aghir.jpg', name:"Aghir"},
]


const service = [
  {src:'imgs/house.webp', title:'Escapades en pleine nature'},
  {src:'imgs/sea.webp', title:'Des logements uniques'},
  {src:'imgs/nature.webp', title:'Logements entiers'},
  {src:'imgs/animals.webp', title:'Animaux de compagnie acceptés',},
]


function App() {
  return (
    <div className="App">
      
      <span className="explore container ">Explorez les environs</span>
      <Container className="d-flex flex-wrap">
         <Country city={cities}/>
      </Container>
      <span className="explore container ">Chez vous, partout</span>
      <Container>
          <div className="d-flex py-3">
              <Service services={service}/>
          </div>
      </Container>

  
        
    </div>
  );
}

export default App;
