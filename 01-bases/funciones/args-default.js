"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const name = `${firstName} ${lastName || '----0----'}`;
        return (upper) ? name.toUpperCase() : name;
    };
    const person = fullName("Exequiel", "Flores");
    console.log({ person });
})();
//# sourceMappingURL=args-default.js.map