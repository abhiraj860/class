function identityOne(val: boolean | number) : boolean | number {
    return val;
}

function identityTwo(val: any):any {
    return val;
}

function identityThree<T>(val : T) : T {
    return val;
}

function identityFour<T> (value: T) : T {
    return value;
}

interface Bottle {
    brand: string;
    type: number;
};

const res = identityFour<Bottle>({brand: "Afs", type: 2});