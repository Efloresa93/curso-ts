namespace Validations {

    export const validateText = (text:string) => {
        return (text.length > 3);
    }

    export const validateDate = (myDate:Date) => {
        return ( isNaN( myDate.valueOf() ) );
    }

}

console.log( Validations.validateText("Exe") );