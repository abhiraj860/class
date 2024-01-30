type keyInput = "up" | "left" | "right" | "down"

enum Direction {
    Up = 1,
    Down,
    Left ,
    Right
}

function doSomething(keyPressed: Direction) {

}

doSomething(Direction.Up);
doSomething(Direction.Left);
doSomething(Direction.Left);
console.log(Direction.Up);
console.log(Direction.Down);