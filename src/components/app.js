import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MortalityList from '../containers/mortality_list';

class App extends Component {
  render () {
    return (
      <div>
        <h1 className="text-center title pt-2">Taux de mortalité de la population agée de 25 ans par pays en 2018</h1>
        <SearchBar defaultCountry='France' />
        <MortalityList defaultCountry='France'/>
      </div>
    )
  }
}

export default App;


