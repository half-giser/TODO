"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS Class 既是一个抽象类（使用关键字: new UserBase("kenny") 实例化对象）
// 也是一种类型（使用 :UserBase，描述变量类型）
// 当声明的类 作为类型使用的时候，该类型只包含其中的实例属性|实例方法
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistanceFromZero = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    return Point;
}());
exports.default = Point;
