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
                    template: `<weather-component></weather-component>`,
                    controller: "weatherController"

                })
                .when("/prime", {
                    template: `<prime-component></prime-component>`,
                    controller: "initController"

                })

        })
})();