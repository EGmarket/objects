const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
}

/* object a for in loop ta use kora valo r array te for of . array te for in use kora good practise er  moddhay pore na karon for in tader order ta thik rakhte pare na.  */

for (const prop in bottle) {
    // console.log(prop) //only getting key
    console.log(prop, bottle[prop]) // getting  values

    /* object theke value near 3ta way achay ekta hocchay dot(.) diye -> bottel.price, 2nd hocchay [] er moddhay kono ekta propertyer name bole dile hobe 3rd holo kono ekta variable  o bosay dile hobe*/
}

// another way is getting key 
const keys = Object.keys(bottle);
const values = Object.values(bottle);
console.log(`keys: ${keys} and Values: ${values}`)

// using entries 
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}