
const menus = {
    startersMenu: {
        options: [
            {name: "patatas bravas", price: 2.55 },
            {name: "croquetas de jamón", price: 6.50},
            {name: "Aros de cebolla", price: 3.55},
            {name: "Nachos Caseros", price: 7.50},
        ]
    }, 

    BreakfastMenu: {
        options: [
            {name: "Bocadillo de jamón", price: 7.99 },
            {name: "Tortilla Francesa", price: 9.50},
            {name: "Tortitas con frutas", price: 6.50},
            {name: "Tostadas Francesas", price: 5.50}
        ],
        extras: [
            {name: "Sirope de Chocolate", price: 1.50 },
            {name: "Mermelada de la Casa", price: 2.10},
            {name: "Pan Tostado y Mantequilla", price: 2.50},
            {name: "Queso", price: 3.5},
        ],
    },

    lunchAndDinnerMenu: {
        options: [
            {name: "Hamburguesa Bottega", price: 7.99 },
            {name: "Fajitas Mixtas", price: 9.50},
        ],
        extras: [
            {name: "patatas fritas", price: 1.50 },
            {name: "nachos con queso", price: 2.50},
        ],
    },
};

// to display menu options
function showOptions(menu, category) {
    let optionsList = `Escoge ${category}\n`;
    menu.options.forEach((option, index) => {
        // Double the price for "Cena"
        const price = category === "Cena" ? option.price * 2 : option.price;
        optionsList += `${index + 1}. ${option.name} - $${price.toFixed(2)}\n`;
    });
    return optionsList;
}

// to display menu extras
function showExtras(menu) {
    let extrasList = "Escoge un extra:\n";
    menu.extras.forEach((extra, index) => {
        extrasList += `${index + 1}. ${extra.name} - $${extra.price}\n`;
    });
    return extrasList;
}

// to display waitress comment

function generateRandomComment() {
    const comments = [
        "Brenda: Excelente Opción!",
        "Brenda: Este es nuestro platillo estrella",
        "Brenda:Tienes un gusto excelente!",
        "Brenda: Este es uno de nuestros más vendidos"
    ];

    const randomIndex= Math.floor(Math.random() * comments.length);
    return comments[randomIndex];
};


// Welcome message
const userName = prompt("¡Bienvenid@ a Bottega Diner! Por favor, ingresa tu nombre:");
alert(`Hola ${userName}! Mi nombre es Brenda y soy tu camarera.`);
alert("Brenda: Este es nuestro menú. Échale un vistazo.");
alert(`Menú Completo:\n\n` +
    `Entrantes:\n${showOptions(menus.startersMenu, "entrantes")}\n\n` +
    `Desayunos:\n${showOptions(menus.BreakfastMenu, "Desayuno")}\nExtras:\n${showExtras(menus.BreakfastMenu)}\n\n` +
    `Almuerzo y Cena:\n${showOptions(menus.lunchAndDinnerMenu, "Almuerzo o Cena")}\nExtras:\n${showExtras(menus.lunchAndDinnerMenu)}`);
alert("Brenda: Listo! Voy a tomar tu orden, empecemos:")

// User can select 1 or 2 options of starters
alert("Empecemos con los Entrantes");
const selectedStarters = prompt(showOptions(menus.startersMenu, "entrantes") + "Por favor, escoge 1 o 2 entrantes (sepáralos con una coma):");
const selectedStartersArray = selectedStarters.split(",").map(index => parseInt(index) - 1);
alert(generateRandomComment());

// User selects Breakfast or Lunch or Dinner
const selectedMenuType = prompt("Por favor escoge el tipo de menú (Desayuno, Almuerzo o Cena):");

// Variables to store user selections
let selectedMenu = {};
let selectedExtras = [];

if (selectedMenuType === "Desayuno") {
    alert("Estas son las opciones para Desayunos:");
    const selectedBreakfast = prompt(showOptions(menus.BreakfastMenu, "Desayuno") + "Por favor, escoge una opción:");
    selectedMenu = menus.BreakfastMenu.options[selectedBreakfast - 1];
    alert(generateRandomComment());

    // User wants extra option
    const wantExtra = confirm("¿Quieres agregar un extra?");
    if (wantExtra) {
        alert("Estos son los extras, ¿cuál quieres?");
        const selectedExtrasBreakfast = prompt(showExtras(menus.BreakfastMenu) + "Por favor, escoge un extra:");
        selectedExtras.push(menus.BreakfastMenu.extras[selectedExtrasBreakfast - 1]);
    }
} else if (selectedMenuType === "Almuerzo") {
    alert("Estas son las opciones del menú:");
    const selectedLunchAndDinner = prompt(showOptions(menus.lunchAndDinnerMenu, "Almuerzo") + "Por favor escoge una opción:");

    if(selectedLunchAndDinner ==="1") {
        cookingPreference = prompt("Brenda: ¿Cómo quieres tu hamburguesa? (Poco hecha, al punto, hecha, muy hecha)");
    }
    
    alert(generateRandomComment());
    // Determine if it is lunch or dinner
    selectedMenu = menus.lunchAndDinnerMenu.options[selectedLunchAndDinner - 1];

    const wantExtra = confirm("¿Quieres agregar un extra?");
    if (wantExtra) {
        alert("Estos son los extras a elegir:");
        const selectedExtrasLunchAndDinner = prompt(showExtras(menus.lunchAndDinnerMenu) + "Por favor, escoge una opción:");
        selectedExtras.push(menus.lunchAndDinnerMenu.extras[selectedExtrasLunchAndDinner - 1]);
    }
} else if (selectedMenuType ==="Cena"){
    alert("Estas son las opciones del menú:");
    const selectedDinner = prompt(showOptions(menus.lunchAndDinnerMenu, "Cena") + "Por favor escoge una opción:");
    selectedMenu = menus.lunchAndDinnerMenu.options[selectedDinner -1];
    if(selectedDinner ==="1") {
        cookingPreference = prompt("Brenda: ¿Cómo quieres tu hamburguesa? (Poco hecha, al punto, hecha, muy hecha)");
    }
    alert(generateRandomComment());

    
    const wantExtra = confirm("¿Quieres agregar un extra?");
    if (wantExtra) {
        alert("Estos son los extras a elegir:");
        const selectedExtrasDinner = prompt(showExtras(menus.lunchAndDinnerMenu) + "Por favor, escoge una opción:");
        selectedExtras.push(menus.lunchAndDinnerMenu.extras[selectedExtrasDinner - 1]);
    }
}else {
    alert("Tipo de Menú Invalido, por favor intente otra vez: " + selectedMenuType);
}

// Display User Menú Selections
alert(`Parece que has seleccionado:\n${selectedStartersArray.map(index => menus.startersMenu.options[index].name).join("\n")}\n${selectedMenu.name}`);

// Bill
let totalCost = 0;
selectedStartersArray.forEach(index => {
    totalCost += menus.startersMenu.options[index].price;
});
totalCost += selectedMenu.price;

selectedExtras.forEach(extra => {
    totalCost += extra.price;
});

alert("Brenda: Espero disfrutaras la comida, esta es la cuenta:");
alert(`Tu cuenta total es de $${totalCost.toFixed(2)}.`);

// Final Message
alert(`Gracias, ${userName}, por comer en Bottega Diner. ¡Esperamos verte de nuevo!`);