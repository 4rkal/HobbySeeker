document.getElementById("generateButton").addEventListener("click", generateHobbies);

function generateHobbies() {
    // Get selected values
    var selectedTime = Number(document.getElementById("time").value);
    var selectedInterest = document.getElementById("interests").value;

    // Fetch data from JSON file
    fetch("hobbies.json")
        .then(response => response.json())
        .then(data => {
            // Filter hobbies based on selected time and interest
            var filteredHobbies = data.hobbies.filter(hobby =>
                Number(hobby.time) <= selectedTime && hobby.interest === selectedInterest
            );

            // Display the result
            displayResult(filteredHobbies);
        })
        .catch(error => console.error("Error fetching data:", error));
}


function displayResult(hobbies) {
    var htmlString = "<h2>Recommended Hobbies:</h2>";

    if (hobbies.length > 0) {
        hobbies.forEach(hobby => {
            htmlString += `
                <div class="hobby">
                    <i class="${hobby.icon}"></i>
                    <div class="hobby-details">
                        <h3>${hobby.name}</h3>
                        <p>${hobby.description}</p>
                        <a href="${hobby.link}" target="_blank">Learn more</a>
                    </div>
                </div>
            `;
        });
    } else {
        htmlString += "<p>No hobbies found for the selected criteria.</p>";
    }

    document.getElementById("result").innerHTML = htmlString;
}
