const Helpers = function() {
    return {
        round: function(value, prec) {
            value = parseInt(parseFloat(value) * 100) / 100;
            value = parseFloat(value.toFixed(prec));

            return value;
        },
    };
};

export default Helpers;