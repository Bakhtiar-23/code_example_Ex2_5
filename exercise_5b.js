function displayColors(mainColor, ...additionalColors) {
    console.log(`Main Color: ${mainColor}`);
    console.log(`Additional Colors: ${additionalColors.join(', ')}`);
}

// Calling the function with multiple arguments
displayColors("Red", "Blue", "Green", "Yellow");


// Calling the function with a different number of arguments
displayColors("Orange", "Purple");

