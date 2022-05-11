const anotherFunction3 = () => {
    for (let i = 1; i <= 10; i++) { // teniendo el let la info del loop se guarda en la memoria y da un nuevo valor para darle la suma y no otorga solametne un valor final
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction3();