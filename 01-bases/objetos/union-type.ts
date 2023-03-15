(() => {

    type Hero = {
        name:string, 
        age:number, 
        powers: string[], 
        getName?:() => string
    }

    let myCustomVar: string|number|Hero = "Exequiel"
    console.log(myCustomVar);

})();