(() => {

    
    interface Client {
        name: string;
        age: number;
        adress: Adress;
        getFullAdress():string;
    }

    interface Adress {
        id:number;
        zip: string;
        city: string;
    }

    const client:Client = {
        name: "Exequiel",
        age: 30,
        adress: {
            id: 125,
            zip: '620000',
            city: "Pta Arenas"
        },
        getFullAdress() {
            return this.adress.city;
        }
    }

})();