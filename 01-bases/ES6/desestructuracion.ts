(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        activo: true,
        poder: 1500
    };

    const printAvenger = ( { ironman, ...resto }:Avengers ) => {
        console.log(ironman, resto);
    }

    const { poder, vision } = avengers;
    console.log(poder, vision.toUpperCase());

    const avengersArr:string[] = ['Cap. America', 'Ironman', 'Hulk'];
    const [, ironman,] = avengersArr;

    const capAmerica: [string, boolean, number] = ['cap. America', true, 150.5];
    const [name, active, power] = capAmerica;
    console.log({ name, active, power });

    


})();