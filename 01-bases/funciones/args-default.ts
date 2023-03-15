(() => {

    const fullName = (firstName: string, lastName?: string, upper:boolean = false) : string => {
        const name = `${firstName} ${lastName || '----0----'}`;
        return (upper) ? name.toUpperCase() : name; 
    }

    const person = fullName("Exequiel", "Flores");
    console.log({ person });

})();