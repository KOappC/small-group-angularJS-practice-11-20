(function() {
    function primeController(primeFactory) {
        var vm = this;
        vm.primeFactors = "";
        vm.chooseNum = function(number) {
            primeFactory.primeCheck(number)
        };
        vm.getNum = function(response) {
            console.log(response);
            vm.primeFactors = response;
        };

    }
    angular
        .module("app")
        .controller("primeController", primeController)
})();