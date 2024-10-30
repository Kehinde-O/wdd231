document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    
    searchBar && searchBar.addEventListener('input', (e) => {
        console.log(`Searching for: ${e.target.value}`);
        // Implement search functionality here
    });

    function loadGadgets() {
        const gadgets = [
            { name: 'Microwave', description: 'Reheat your food quickly and evenly.', image: 'images/microwave.jpg' },
            { name: 'Air Fryer', description: 'Healthy frying with less oil and mess.', image: 'images/airfryer.jpg' },
            { name: 'Toaster', description: 'Perfect toast every time.', image: 'images/toaster.jpg' },
            { name: 'Coffee Maker', description: 'Start your day with a fresh brew.', image: 'images/coffeemaker.jpg' },
            { name: 'Electric Blender', description: 'Blend smoothies in seconds.', image: 'images/blender.jpg' },
            { name: 'Electric Grill', description: 'Grill indoors with ease.', image: 'images/grill.jpg' }
        ];

        const gadgetGrid = document.querySelector('.gadget-grid');
        gadgets.forEach(gadget => {
            const gadgetCard = document.createElement('div');
            gadgetCard.className = 'gadget-card';
            gadgetCard.innerHTML = `
                <img src="${gadget.image}" alt="${gadget.name}" style="width:100%; border-radius: 8px;">
                <h4>${gadget.name}</h4>
                <p>${gadget.description}</p>
                <button>Learn More</button>
            `;
            gadgetGrid.appendChild(gadgetCard);
        });
    }

    function loadRecipes() {
        const recipes = [
            { title: 'Pasta Primavera', description: 'A fresh and vibrant dish perfect for any season.', image: 'images/pasta.jpg' },
            { title: 'Vegan Buddha Bowl', description: 'A nutritious bowl full of flavor.', image: 'images/buddha-bowl.jpg' },
            { title: 'Grilled Chicken', description: 'Juicy and perfectly grilled chicken.', image: 'images/grilled-chicken.jpg' }
        ];

        const recipeGrid = document.querySelector('.recipe-grid');
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; border-radius: 8px;">
                <h4>${recipe.title}</h4>
                <p>${recipe.description}</p>
                <button>View Recipe</button>
            `;
            recipeGrid.appendChild(recipeCard);
        });
    }

    loadGadgets();
    loadRecipes();
});
