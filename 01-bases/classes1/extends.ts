(() => {

    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log("Constructor Avenger llamado !")
        }
        protected getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string, 
            realName: string,
            private isMutant:boolean
        ) {
            super(name, realName);
            console.log("Constructor xmen");
        }

        get fullName () {
            return `${this.name}`;
        }

        set fullName(name:string) {
            this.name = name;
        }

        getFullnameDesdeXmen() {
            console.log(`Este es el Fullname: ${super.getFullname()}`)
        }
    }


    const xMen = new Xmen("Exequiel", "Flow", false);
    xMen.fullName = "Exe";

    



})();