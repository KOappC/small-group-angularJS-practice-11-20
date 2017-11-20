(function() {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/group", {
                    template: `<group-component></group-component>`,
                    controller: "initController"

                })
                .when("/weather", {
                    template: `<prime-component></prime-component>`,
                    controller: "initController"

                })
                .when("/prime", {
                    template: `<weather-component></weather-component>`,
                    controller: "initController"

                })

        })
})();