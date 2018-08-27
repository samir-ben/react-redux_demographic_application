import React from 'react';
const URL_FLAG = "http://www.sciencekids.co.nz/images/pictures/flags680/";

const Flag = ({country, className}) => {
    return (
        // Retourne un drapeaux (simple image)
        // L'expression régulière permet de récupérer les drapeaux des pays dont le nom comporte des espaces, sinon cela ne marche pas
        <div>
            <img src={`${URL_FLAG}${country.replace(/\s+/g, '_')}.jpg`} className={className}/>
        </div>
    )
}

export default Flag