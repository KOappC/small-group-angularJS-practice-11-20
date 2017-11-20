(function() {
    function weatherController(weatherFactory) {
        var vm = this;
        vm.currentTemp = "";
        vm.windSpeed = "";
        vm.locationSearch = function(city, state) {
            console.log(city, state);
            weatherFactory.makeRequest(city,state).then(function(response) {
                console.log(response);
                vm.currentTemp = response.data.current_observation.temp_f;
                vm.windSpeed = response.data.current_observation.wind_mph;
            })
        }

    }

    angular
        .module("app")
        .controller("weatherController", weatherController)
})();