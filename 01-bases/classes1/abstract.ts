(() => {

    abstract class Mutante {
        constructor(
            public name: string, public realName: string
        ){}

    }

    class Xmen extends Mutante {
        
        salvarMundo() {
            return 'Mundo Salvado !';
        }

    }

    class Villian extends Mutante {
        
        conquistarMundo() {
            return 'Mundo Destruido !';
        }

    }
    
    const wolverine:Mutante = new Xmen('Wolverine', 'Mutante');
    const magneto = new Villian('Magneto', 'Magnus');

    const printName = ( character:Mutante ) => {
        console.log(character.name);
    }

    printName(wolverine);

    

})();