// // Function to fetch user's current location
// function fetchLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(displayLocation);
//     } else {
//         console.error("Geolocation is not supported by this browser.");
//     }
// }

// // Function to display user's current location
// function displayLocation(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     const coordinates = `Latitude: ${latitude}, Longitude: ${longitude}`;
//     // Assuming there's an element with ID 'location' to display the coordinates
//     document.getElementById('location').innerText = coordinates;

//     // Redirect after 2 seconds
//     setTimeout(function () {
//         window.location.href = "address_page.html";
//     }, 2000); // 2000 milliseconds = 2 seconds
// }

// // Call the function to fetch location when the page loads
// window.onload = fetchLocation;
