const GetCountryInfo = document.querySelector('.GetInfoBtn')
const ChosenCountry = document.querySelector('#CountryDropdown')
const CountryName = document.querySelector('.CountryName')
const topLevelDomain = document.querySelector('.topLevelDomain')
const CallingCode = document.querySelector('.CallingCode')
const Capital = document.querySelector('.Capital')
const Region = document.querySelector('.Region')
const Subregion = document.querySelector('.Subregion')
const Population = document.querySelector('.Population')
const Timezone = document.querySelector('.Timezone')
const LanguageInEnglish = document.querySelector('.LanguageInEnglish')
const CurrencyCode = document.querySelector('.CurrencyCode')
const CurrencyName = document.querySelector('.CurrencyName')
const CurrencySymbol = document.querySelector('.CurrencySymbol')
const FlagImage = document.querySelector('.FlagImg img');


GetCountryInfo.addEventListener('click', getInfo);

function getInfo() {
    let url = `https://restcountries.com/v2/name/${ChosenCountry.value}`;
    fetch(url)
    .then(Response => {
        return Response.json();
    })
    .then(data =>{
        let country = data[0];
        CountryName.innerHTML = country.name
        topLevelDomain.innerHTML = "Top-Level domain : " + country.topLevelDomain[0]
        CallingCode.innerHTML = "Calling code : " + country.callingCodes[0]
        Capital.innerHTML = "Capital : " + country.capital
        Region.innerHTML = "Region : " + country.region
        Subregion.innerHTML = "Subregion : " + country.subregion
        Population.innerHTML = "Population : " + country.population
        Timezone.innerHTML = "Timezone : " + country.timezones[0]
        LanguageInEnglish.innerHTML = "Language : " + country.languages[0].name
        CurrencyCode.innerHTML = "Currency code : " + country.currencies[0].code
        CurrencyName.innerHTML = "Currency name : " + country.currencies[0].name
        CurrencySymbol.innerHTML = "Currency symbol : " + country.currencies[0].symbol
        FlagImage.src = country.flag
    });
};