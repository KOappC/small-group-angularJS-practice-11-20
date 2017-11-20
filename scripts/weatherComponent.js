(function() {
    var weatherComponent = {
        controller: "weatherController",
        templateUrl: "./partials/weatherPartial.html"
    };

    angular
        .module("app")
        .component("weatherComponent", weatherComponent)
})();