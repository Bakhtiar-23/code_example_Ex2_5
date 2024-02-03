function createPerson(name, age = 46, city = "Turku") {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

// Calling the function with only the required parameter
createPerson("Bakhtiar");

// Calling the function with custom values for age and city
createPerson("Danyar", 30, "New York");
