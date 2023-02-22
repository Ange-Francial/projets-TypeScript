"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TroisPoints = /** @class */ (function () {
    function TroisPoints(_premier, _deuxieme, _troisieme) {
        this._premier = _premier;
        this._deuxieme = _deuxieme;
        this._troisieme = _troisieme;
    }
    Object.defineProperty(TroisPoints.prototype, "premier", {
        get: function () {
            return this._premier;
        },
        set: function (_premier) {
            this._premier = _premier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "deuxieme", {
        get: function () {
            return this._deuxieme;
        },
        set: function (_deuxieme) {
            this._deuxieme = _deuxieme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "troisieme", {
        get: function () {
            return this._troisieme;
        },
        set: function (_troisieme) {
            this._troisieme = _troisieme;
        },
        enumerable: true,
        configurable: true
    });
    TroisPoints.prototype.TesterAlignement = function () {
        var x = this._premier.calculerDistance(this._deuxieme);
        var y = this._premier.calculerDistance(this.troisieme);
        var z = this._deuxieme.calculerDistance(this._troisieme);
        if (x == y + z || y == x + z || z == x + y) {
            return true;
        }
        else {
            return false;
        }
    };
    TroisPoints.prototype.estIsocele = function () {
        var x = this._premier.calculerDistance(this._deuxieme);
        var y = this._premier.calculerDistance(this.troisieme);
        var z = this._deuxieme.calculerDistance(this._troisieme);
        if (x == y || x == z || z == y) {
            return true;
        }
        else {
            return false;
        }
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
