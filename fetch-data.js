// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Constant assigned to API endpoint
    const dataContainer = document.getElementById('api-data'); // Selecting the data display element

    try {
        // Fetch the user data from the API
        const response = await fetch(apiUrl); // Store the response

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        // Parse the JSON data
        const users = await response.json(); // Store the parsed data

        // Clear the loading message
        dataContainer.innerHTML = ''; // Clear existing content

        // Create a <ul> element to hold the user names
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements
        users.forEach(user => {
            const userListItem = document.createElement('li');
            userListItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(userListItem); // Append the <li> to the <ul>
        });

        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear existing content and handle any errors
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
    }
}

// Add event listener for DOMContentLoaded to invoke fetchUserData
document.addEventListener('DOMContentLoaded', fetchUserData);
