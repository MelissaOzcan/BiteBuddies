/* 
Contains all of the recipes that will be recommended to the user. 
"Price" is an int 1-5.
*/

let recipe1 = {
    name: "Lentil Soup",
    ingredients: ["lentils", "water", "carrots", "onions", "celery", "garlic", "salt", "pepper"],
    price: 2,
    restriction: "vegan"
};
let recipe2 = {
    name: "Fried Rice",
    ingredients: ["rice", "eggs", "soy sauce", "green onions", "carrots", "peas", "salt", "pepper"],
    price: 3,
    restriction: "vegetarian"
};
let recipe3 = {
    name: "Mac and Cheese",
    ingredients: ["macaroni", "cheese", "milk", "butter", "salt", "pepper"],
    price: 2,
    restriction: "vegetarian"
};
let recipe4 = {
    name: "Chicken Pesto Soup",
    ingredients: ["chicken", "pesto", "water", "carrots", "onions", "celery", "garlic", "salt", "pepper"],
    price: 4,
    restriction: "none"
};
let recipe5 = {
    name: "Chicken Alfredo",
    ingredients: ["chicken", "alfredo sauce", "pasta", "salt", "pepper"],
    price: 5,
    restriction: "none"
};

let recipes = [recipe1, recipe2, recipe3, recipe4, recipe5];
export default recipes;