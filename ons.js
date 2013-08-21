(function (ONS) {
    if ('undefined' == typeof exports) {
        window.ONS = ONS;
    } else {
        module.exports = ONS;
    }
})(function () {

    'use strict';

    var ONS = function () {
        this.night = 1;
    };

    ONS.prototype.starter = function (prompt) {
        var self = this;
        
        // 搭讪开场白
        prompt("So... What's your favorite programming language?", function (answer) {
            switch (answer) {
                case "JavaScript":
                    self.make();
                    break;
                case "CoffeeScript":
                    // ignore
                    break;
                case "PHP":
                    throw new Error("Sounds great!");
                default:
                    try {
                        self.make();
                    } catch (e) {
                        throw new Error("I like it too.");
                    }
            }
        });
    };

    ONS.prototype.make = function () {
        // 做爱做的事
    };

    return ONS;

});
