(function () {

    'use strict';

    var ONS = function () {
        this.night = 1;
    };

    ONS.prototype.starter = function () {
        // 搭讪开场白
        window.prompt("So... What's your favorite programming language?");
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
