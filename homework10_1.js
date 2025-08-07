var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    }
];
const emailsWeTrust = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
const arreyEmailWeTrust = [];

for (let i = 0; i < arr.length; i++) {
    const email = arr[i].email;
    if (emailsWeTrust.test(email)) {
        arreyEmailWeTrust.push(email);
    }
}

console.log("Гідні довіри email-и:", arreyEmailWeTrust);