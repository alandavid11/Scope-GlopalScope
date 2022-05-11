const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.loh(hello);

var scopre = "I am global";

const functionScope = () => {
    var scope = "I am just a local";
    const funct = () => {
        return scope
    }
    console.log(funct());
};

functionScope();
console.log(scope);