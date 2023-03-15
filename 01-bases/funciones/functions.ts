(() => {

    const hero: string = 'Flash';

    function returnName() : string {
        return hero;
    }

    const activateBatiSIgnal = () => {
        return 'La Bati Signal';
    }

    console.log(typeof activateBatiSIgnal);

    const heroName = returnName();

    console.log(heroName);

})();