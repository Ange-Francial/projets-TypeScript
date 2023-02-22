"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_abs, _ord) {
        this._abs = _abs;
        this._ord = _ord;
    }
    Object.defineProperty(Point.prototype, "abs", {
        get: function () {
            return this._abs;
        },
        set: function (_abs) {
            this._abs = _abs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "ord", {
        get: function () {
            return this._ord;
        },
        set: function (_ord) {
            this.ord = _ord;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.calculerDistance = function (p) {
        var x = p.abs - this.abs;
        var y = p.ord - this.ord;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    };
    Point.prototype.calculerMilieu = function (p) {
        var x = (p.abs + this.abs) / 2;
        var y = (p.ord + this.ord) / 2;
        var M;
        M._abs = x;
        M._ord = y;
        return M;
    };
    return Point;
}());
exports.Point = Point;
