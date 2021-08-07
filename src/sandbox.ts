let greet : (a: string, b: string) => void;

greet = (name: string, type: string) => {
  return `string is ${name}-${type}`
}

let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (ninja: { name: string, age: number }) => {
  console.log(`${ninja.name}-${ninja.age} year old`);
  
}
