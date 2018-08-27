import React, { Component } from 'react';
import MortalityListItem from '../components/mortality_list_item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMortality} from '../actions/index';

class MortalityList extends Component {
    // Récupère les données issues de l'API
    componentWillMount(){
        this.props.getMortality(this.props.defaultCountry);
    }
    // Renvoi un item avec les données chargées, on passe les data dans la props 'mortality'
    renderMortalities = () => {
        return this.props.mortalities.map(data=>{
            return <MortalityListItem key={data.country} mortality={data}/>
        })
    }
    render () {
        return (
            // Tableau pour afficher les données
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pays</th>
                            <th className="col-md-6">Hommes</th>
                            <th className="col-md-6">Femmes</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderMortalities()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        mortalities: state.mortality
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getMortality }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MortalityList);