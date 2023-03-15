(() => {

    type hero = {
        name:string, 
        age:number, 
        powers: string[], 
        getName?:() => string
    }

    let flash:hero = {
        name: "Barry Alen",
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };

})();