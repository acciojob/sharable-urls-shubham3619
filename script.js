// your code here
document.getElementById("button").addEventListener("click", function() {
            // Get the values from the input fields
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            // Create the query string
            const queryString = `?name=${encodeURIComponent(name)}&year=${year}`;

            // Update the h3 element with the new URL
            const urlElement = document.getElementById("url");
            urlElement.textContent = `https://localhost:8080/${queryString}`;
        });