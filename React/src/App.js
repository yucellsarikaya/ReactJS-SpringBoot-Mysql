import { Container } from "reactstrap";
import Navi from "./components/navi/Navi";
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/notFound/NotFound'

import City from './components/city/City'
import CityAdd from './components/city/CityAdd'
import CityUpdate from './components/city/CityUpdate'


import Country from './components/country/Country'
import CountryAdd from './components/country/CountryAdd'
import CountryUpdate from './components/country/CountryUpdate'

import Campus from './components/campus/Campus'
import CampusAdd from './components/campus/CampusAdd'
import CampusUpdate from './components/campus/CampusUpdate'

import Complex from "./components/complex/Complex";
import ComplexAdd from "./components/complex/ComplexAdd";
import ComplexUpdate from "./components/complex/ComplexUpdate";

import Block from "./components/block/Block";
import BlockAdd from "./components/block/BlockAdd";
import BlockUpdate from "./components/block/BlockUpdate";

import Building from "./components/building/Building";
import BuildingAdd from "./components/building/BuildingAdd";
import BuildingUpdate from "./components/building/BuildingUpdate";

import Floor from "./components/floor/Floor";
import FloorAdd from "./components/floor/FloorAdd";
import FloorUpdate from "./components/floor/FloorUpdate";

import Room from "./components/room/Room";
import RoomAdd from "./components/room/RoomAdd";
import RoomUpdate from "./components/room/RoomUpdate";


import LocList from "./components/locList/LocList";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Switch>
          <Route exact path="/" render={props => (<LocList />)} />

          <Route exact path="/city" component={City} />
          <Route exact path="/cityAdd" component={CityAdd} />
          <Route exact path="/cityUpdate/:id" component={CityUpdate} />

          <Route exact path="/country" render={props => (<Country />)} />
          <Route exact path="/countryAdd" render={props => (<CountryAdd />)} />
          <Route exact path="/countryUpdate/:id" render={props => (<CountryUpdate {...props} />)} />

          <Route exact path="/campus" render={props => (<Campus />)} />
          <Route exact path="/campusAdd" render={props => (<CampusAdd />)} />
          <Route exact path="/campusUpdate/:id" render={props => (<CampusUpdate {...props} />)} />


          <Route exact path="/complex" render={props => (<Complex />)} />
          <Route exact path="/complexAdd" render={props => (<ComplexAdd />)} />
          <Route exact path="/complexUpdate/:id" render={props => (<ComplexUpdate {...props} />)} />

          <Route exact path="/block" render={props => (<Block />)} />
          <Route exact path="/blockAdd" render={props => (<BlockAdd />)} />
          <Route exact path="/blockUpdate/:id" render={props => (<BlockUpdate {...props} />)} />

          <Route exact path="/building" render={props => (<Building />)} />
          <Route exact path="/buildingAdd" render={props => (<BuildingAdd />)} />
          <Route exact path="/buildingUpdate/:id" render={props => (<BuildingUpdate {...props} />)} />

          <Route exact path="/floor" render={props => (<Floor />)} />
          <Route exact path="/floorAdd" render={props => (<FloorAdd />)} />
          <Route exact path="/floorUpdate/:id" render={props => (<FloorUpdate {...props} />)} />

          <Route exact path="/room" render={props => (<Room />)} />
          <Route exact path="/roomAdd" render={props => (<RoomAdd />)} />
          <Route exact path="/RoomUpdate/:id" render={props => (<RoomUpdate {...props} />)} />

          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
