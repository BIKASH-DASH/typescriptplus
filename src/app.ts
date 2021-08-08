import { Invoice } from './classes/invoice.js'

interface IsPerson {
  name: string,
  age: number,
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "bikash",
  age: 12,
  speak(text: string): void{console.log(text);
  },
  spend(amount: number): number{
    console.log(amount)
    return amount
  }
}

const greetPerson = (person: IsPerson) => {
  console.log(`hii ${person.name} your age is :${person.age}`);
}

greetPerson(me)

const anchor = document.querySelector('a')

console.log('anchor--', anchor?.href);




const invOne = new Invoice('mario', 'long runnor', 250);
const invTwo = new Invoice('luigi', 'long luigi', 300);

let invoiceArray: Invoice[] = [];
invoiceArray.push(invOne);
invoiceArray.push(invTwo);
invoiceArray.forEach(inv => {
  console.log("forEach--->",inv.amount,inv.client,inv.format());
  
})









const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;

console.log(type?.children);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
  
})


