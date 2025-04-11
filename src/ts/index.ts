import Point from './point';

interface IPoint extends Point {
    y: number;
    getDistanceFromZero(): number;
}

export default IPoint;