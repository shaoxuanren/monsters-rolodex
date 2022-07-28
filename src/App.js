import { useState, useEffect } from 'react';
import logo from './logo.svg'; //logo import
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Card from './components/card/card.component';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValuefuction], default as ''
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
    
  }, []); //we don;t want to change it ever, we just pass an empty array into this array, so nothing should be recalled again ever.

  useEffect(()=>{
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) =>{
          const searchFieldString = event.target.value.toLowerCase();
          setSearchField(searchFieldString);
        }


  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>

    <SearchBox 
      className = 'monster-search-box' 
      onChangeHandler = {onSearchChange} 
      placeholder = 'search monsters'
    />

    <Cardlist monsters = {filterMonsters}/>
  </div>
  )
}



// class App extends Component { //Generic function called app

//   constructor() {
//     super();
//     this.state = {
//       monsters: [], 
//       searchField : '',

//   }
// }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//      return {monsters:users}
//   },
//   () => {
//     console.log(this.state)
//   }
  
//   ));
                      
// }
//   onSearchChange = (event) =>{
//     // [{name: 'LEanner}]
//     const searchField = event.target.value.toLowerCase();
//      this.setState(() => {
//       return {searchField}; //search field valye
//      });
//   }
  
//   render() {

//     //cast vairables to this make it more readable
//     const {monsters, searchField } = this.state;
//     const {onSearchChange} = this;
//     const filtermonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

 
//   return (
//     <div className="App">
//       <h1 className='app-title'>Monster Rolodex</h1>

//       {/* {filtermonsters.map(monster => {
//         return <div key = {monster.id}><h1>{monster.name}</h1></div>;
//       })} */}
//       <SearchBox className = 'monster-search-box' onChangeHandler = {onSearchChange} placeholder = {'search monsters'} />

//       <Cardlist monsters = {filtermonsters}/>
//     </div>
//   );

//   }
// }

export default App;
