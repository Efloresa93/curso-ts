(() => {

    const fullName = (firstName: string, lastName?: string) : string => {
        return `${firstName} ${lastName || '----0----'}`
    }

    const person = fullName("Exequiel", "Flores");
    console.log({ person });

})();