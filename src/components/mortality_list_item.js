import React from 'react';
import Flag from './flag';
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

//const
const xTitle= "Age";
const yTitle = "% Mortalité";


const MortalityListItem = ({mortality}) => {
    const maleFormatedData = formatMortalitiesData(mortality.male);
    const femaleFormatedData = formatMortalitiesData(mortality.female);
    return (
        // Retourne une ligne de tableau avec le drapeaux et les graphiques
        <tr>
            <th><Flag country={mortality.country} className="flag_medium" /></th>
            <th className="col-md-6"><ColumnChart xtitle={xTitle} ytitle={yTitle} data={maleFormatedData} max={30} /></th>
            <th className="col-md-6"><ColumnChart xtitle={xTitle} ytitle={yTitle} data={femaleFormatedData} max={30} /></th>
        </tr>
    )
}
// Formatage des données reçues de l'API
function formatMortalitiesData(mortality){
    // On filtre les données, tous les ages au dessus de 100 sont exclus
    const filteredData = mortality.filter(data =>{
        if(data.age>= 101){
            return false;
        } else {
            return data;
        }
    })
    // On map sur les données filtrées
    const array = filteredData.map(data => {
        return [`${data.age.toFixed(0)}`, Number((data.mortality_percent).toFixed(0))] // les données sont formatées à l'arrondie
    })
    return array
}

export default MortalityListItem;