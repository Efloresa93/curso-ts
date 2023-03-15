(() => {

    class Apocalipsis {

        static intance: Apocalipsis;
        
        private constructor(public name:string) {
            
        }

        static callApocalipsis(): Apocalipsis {

            if( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis("Revelation");
            }
            
            return Apocalipsis.intance
        
        }

        changeName(newName: string) :void {
            this.name = newName;
        }

    }


    const apocalipsis = Apocalipsis.callApocalipsis();

    // const apocalipsis = new Apocalipsis('Revelation');
    // console.log(apocalipsis);

})();