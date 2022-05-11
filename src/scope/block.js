const fruits = () => {
    if (true){
        var fruits1 = 'Apple';
        var fruits2 = 'Banana';
        var fruits3 = 'Kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction3 = () => {
    for (let i = 0; i<10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction3();