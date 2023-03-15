(() => {
    
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    const myFunction = addNumber;
    console.log(myFunction(1,2));


    // function que devuelve un número
    let myfunctionLet: (y:string) => number;
    let myfunctionLet2: (y:string) => void;
    let myfunctionLet3: () => void;


})();