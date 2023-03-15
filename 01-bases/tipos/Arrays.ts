(() => {

    const number: (number | string | boolean)[] = [1,2,3,4,5,6,7,8,9,10];
    number.push(true);
    console.log(number);

    const villian:string[] = ['Duende Verde', 'Jokker'];
    villian.forEach( console.log );

})();