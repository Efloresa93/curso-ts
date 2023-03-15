(() => {

    // Never retorna siempre un error
    const error = (message:string):(never|number) => {
        if(false) throw new Error(message);
        return 1000;
    }

})();