(function () {

    'use strict';

    var ONS = function () {
        this.night = 1;
    };

    ONS.prototype.make = function () {
        // 做爱做的事
    };

    if ('undefined' == typeof exports) {
        window.ONS = ONS;
    } else {
        module.exports = ONS;
    }

})();
