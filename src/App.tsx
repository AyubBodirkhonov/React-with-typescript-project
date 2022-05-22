import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}
function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: "LeBron James",
      url: "https://phantom-marca.unidadeditorial.es/81bcb0e771d00460643883701caab97d/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/20/16530820031752.jpg",
      age: 36,
      note: "The best player of the Year"
    }
  ])
 
  return (
    <div className="App">
        <h1>People Invited to my Party</h1>
        <List people={people}/>
        <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
