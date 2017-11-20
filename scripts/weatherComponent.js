(function() {
    var weatherComponent = {
        controller: "initController",
        templateUrl: "./partials/weatherPartial.html"
    };

    angular
        .module("app")
        .component("weatherComponent", weatherComponent)
})();