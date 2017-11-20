(function() {
    var groupComponent = {
        controller: "initController",
        templateUrl: "./partials/groupInfo.html"
    };

    angular
        .module("app")
        .component("groupComponent", groupComponent)
})();