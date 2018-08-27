import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCountries} from '../actions/index';
import { getMortality } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCountry: this.props.defaultCountry
        }
    }
    // Récupère les données issues de l'API
    componentWillMount(){
        this.props.getCountries();
    }
    // S'il y a des données, affiche une select box avec la liste des pays récupérée via l'API
    renderSelectBox(){
        const { countries } = this.props;
        if(countries){
            return(
                    <select className="col-lg-12 input-group" value={this.state.selectedCountry} onChange={this.searchCountry}>
                        {countries.map(country => {
                            return <option  key={country} value={country}>{country}</option>
                        })}
                    </select>
            )
        } else {
            // S'il n'y a pas de données, retourne une div affichant qu'aucun pays a été trouvé
            return <div>Pas de pays trouvés</div>
        }
    }
    // Récupère les données du pays en fonction du choix de l'utilisateur
    searchCountry = (e) =>{
        this.setState({
            selectedCountry: e.target.value
        }, function(){
            this.props.getMortality(this.state.selectedCountry);
        })
    }
    render () {
        return (
            <div className="search_bar">
                {this.renderSelectBox()}
            </div>
        )
    }
}
// Récupère le state de l'application
function mapStateToProps(state){
    return{
        countries: state.countries
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ getCountries, getMortality}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);