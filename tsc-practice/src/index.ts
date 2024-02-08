interface Point {
    x : number;
    y: number;
}

function logPoint(p : Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = {x : 12, y: 26};
const point3 = {x: 12, y: 26, z: 89};

logPoint(point);
logPoint(point3);

const rect = {x: 33, y: 3, width: 30, height: 34};
logPoint(rect);

