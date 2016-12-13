var CountryView = require('./views/country_view.js')

window.onload = function () {
    var countries = new CountryView();
    var url = 'https://restcountries.eu/rest/v1';
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
        if (request.status === 200) {
            var jsonString = request.responseText;
            countriesData = JSON.parse(jsonString);
            countries.main(countriesData);
        }
    };
    request.send();

};
