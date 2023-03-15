(() => {
    
    class Avenger {

        static avgAge: number = 35;
        static getAvgAge() {
            // regresa el nombre de la clase
            return this.name;
        }
        constructor( private name:string, private team:string, public realName?:string ) { }



    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman)

})();