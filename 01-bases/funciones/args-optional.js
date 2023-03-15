"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----0----'}`;
    };
    const person = fullName("Exequiel", "Flores");
    console.log({ person });
})();
//# sourceMappingURL=args-optional.js.map