(() => {

    const fullName = (firstName: string, lastName: string) : string => {
        return `${firstName} ${lastName}`
    }

    const person = fullName("Exequiel", "Flores");
    console.log({ person });

})();