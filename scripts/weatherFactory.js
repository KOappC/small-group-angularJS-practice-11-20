(function() {
    function weatherFactory($http) {
        var weatherData = {};
        return {
            makeRequest: makeRequest
        };

        function makeRequest(city, state) {
            return $http({
                method: "GET",
                url: "http://api.wunderground.com/api/3b57aebcf8eb6473/conditions/q/" + state + "/" + city + ".json"
            }).then(function(info) {
                weatherData = info;
                return weatherData
            })
        }
    }

    angular
        .module("app")
        .factory("weatherFactory", weatherFactory);
})();