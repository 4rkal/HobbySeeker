// Assuming you have a function findHobbies() to handle the button click on the index.html page
function findHobbies() {
    // Retrieve the selected category
    var selectedCategory = document.querySelector('input[name="category"]:checked').value;

    // Redirect to the hobbies.html page with the selected category as a query parameter
    window.location.href = "hobbies.html?category=" + selectedCategory;
}

// Assuming you have a function displayCategories() to display the categories on index.html
function displayCategories(categories) {
    var categoryCardsDiv = document.getElementById('categoryCards');

    categories.forEach(function(category) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        // Create your card HTML structure here using the category data
        cardDiv.innerHTML = `
            <div class="align">
                <i class="fa-solid fa-futbol fa-2xl"></i>
                <div class="card-body">
                    <h5 class="card-title">${category.name}</h5>
                    <p class="card-text">${category.description}</p>
                    <div class="align">
                        <div class="form-check form-switch form-check-reverse align">
                            <input class="form-check-input" type="radio" name="category" value="${category.id}" id="category${category.id}">
                            <label class="form-check-label" for="category${category.id}"></label>
                        </div>
                    </div>
                </div>
            </div>
        `;

        categoryCardsDiv.appendChild(cardDiv);
    });
}

// Load categories from categories.json and display them
fetch('categories.json')
    .then(response => response.json())
    .then(categories => displayCategories(categories));
