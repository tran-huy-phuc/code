type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log(pt.x);
    console.log(pt.y);
}

printCoord({x: 1, y: 1});