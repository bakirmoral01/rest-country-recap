const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountires(data))
}

const displayCountires = countries => {
    console.log(countries[0]);

    const countriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}


const getCountryHTML = country => {
    return `
<div>
<h2>${country.name.common}</h2>
<img src="${country.flags.png}">
</div>

`
}

loadCountries();