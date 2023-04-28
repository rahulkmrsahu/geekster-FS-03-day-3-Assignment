 // Define the "person" object
 let person = {
    name: "John",
    age: 30,
    email: "john@example.com",
    hobbies: ["reading", "coding", "gaming"]
  };
  
  // Display the entire object
  console.log(person);
  
  // Add a new property using dot notation
  person.location = "New York";
  
  // Update a property using square bracket notation
  person["email"] = "john.doe@example.com";
  
  // Define a nested "family" object
  person.family = {
    mother: { name: "Jane", age: 55 },
    father: { name: "Jack", age: 60 },
    siblings: [
      { name: "Mary", age: 25 },
      { name: "Peter", age: 20 }
    ]
  };
  
  // Display the entire object including the nested "family" object
  console.log(person);
  
  // Define a "greet" function and assign it as a method of the "person" object
  person.greet = function(name) {
    console.log(`Hello ${name}, my name is ${this.name}. Nice to meet you!`);
  };
  
  // Shallow clone the "person" object
  let clonedPerson = Object.assign({}, person);
  
  // Display both the original and cloned objects
  console.log(person);
  console.log(clonedPerson);
  
  // Deep clone the "person" object using JSON.parse() and JSON.stringify()
  let deepClonedPerson = JSON.parse(JSON.stringify(person));
  
  // Display both the original and cloned objects
  console.log(person);
  console.log(deepClonedPerson);
  
  // Display the keys, values, and key-value pairs of the "person" object
  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.entries(person));
  