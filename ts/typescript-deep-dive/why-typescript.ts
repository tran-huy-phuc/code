interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

const point2D: Point2D = {x: 0, y: 0}
const point3D: Point3D = {x: 0, y: 0, z: 0}

function printPoint2D(pt: Point2D) {
    console.log(pt.x, pt.y);
}

printPoint2D(point2D);
printPoint2D(point3D);
// printPoint2D({x: 0});

declare var $: any;
$('.awesome').show();