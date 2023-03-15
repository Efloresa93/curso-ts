(() => {

    interface Xmen {
        name:string;
        realName: string;
        mutantPower( id:number ):string;
    }

    interface Human {
        age:number;
    }

    class Mutant implements Xmen, Human {
        
        public age: number=0;
        public name: string='';
        public realName: string='';
        
        mutantPower(id: number): string {
            throw new Error("Method not implemented.");
        }

    }

})();