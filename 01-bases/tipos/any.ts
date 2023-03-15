(() => {

    let avenger:any = 123;
    let avenger2:string = "Hola a todos";
    let exists;
    let power;

    avenger = "Hola mundo";
    // Cast en TS
    console.log((avenger as String).charAt(0), avenger2.charAt(2));
    console.log(<number>avenger.toFixed(2), avenger2.charAt(2));

})();