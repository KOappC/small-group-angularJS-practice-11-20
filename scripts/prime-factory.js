(function() {
    function primeFactory() {
        var primeData = {};
        return {
            primeCheck: primeCheck
        };

        function primeCheck(num) {
            for (var i = 2; i <= num; i++) {
                while (num % i === 0) {
                    console.log(i);
                    num = num / i;
                }
            }
            return primeData;
        }
    }

    angular
        .module("app")
        .factory("primeFactory", primeFactory)
})();