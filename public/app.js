import { Invoice } from './classes/invoice.js';
const me = {
    name: "bikash",
    age: 12,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(`hii ${person.name} your age is :${person.age}`);
};
greetPerson(me);
const anchor = document.querySelector('a');
console.log('anchor--', anchor === null || anchor === void 0 ? void 0 : anchor.href);
const invOne = new Invoice('mario', 'long runnor', 250);
const invTwo = new Invoice('luigi', 'long luigi', 300);
let invoiceArray = [];
invoiceArray.push(invOne);
invoiceArray.push(invTwo);
invoiceArray.forEach(inv => {
    console.log("forEach--->", inv.amount, inv.client, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const amount = document.querySelector('#amount');
const details = document.querySelector('#details');
console.log(type === null || type === void 0 ? void 0 : type.children);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
