(function() {
    var primeComponent = {
        controller: "primeController",
        templateUrl: "./partials/primePartial.html"
    };

    angular
        .module("app")
        .component("primeComponent", primeComponent)
})();