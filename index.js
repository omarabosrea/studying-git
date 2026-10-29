const sayHello = () => {
    console.log('hello world!!!'); 
};


const sayPay = () => {
    console.log('byby');
}


function loggerMessage(functions){
    functions.map(fun => fun());
}

loggerMessage([sayHello , sayPay])

console.log('omar');
