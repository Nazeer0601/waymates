// Array to store posted rides
let postedRides = [];

// Function to post a ride
function postRide(event) {
    event.preventDefault();

    // Get values from the form
    const origin = document.getElementById("post-origin").value;
    const destination = document.getElementById("post-destination").value;
    const date = document.getElementById("post-date").value;
    const time = document.getElementById("post-time").value;
    const seats = document.getElementById("seats").value;
    const mobile = document.getElementById("mobile").value;

    // Create a new ride object
    const newRide = {
        origin,
        destination,
        date,
        time,
        seats,
        mobile
    };

    // Push the new ride into the postedRides array
    postedRides.push(newRide);

    // Display result of posting the ride
    document.getElementById("postResult").innerHTML = `Your ride has been posted! Origin: ${origin}, Destination: ${destination}, Date: ${date}, Time: ${time}, Seats Available: ${seats}, Mobile: ${mobile}`;
    
    // Clear the form fields
    document.getElementById("post-origin").value = '';
    document.getElementById("post-destination").value = '';
    document.getElementById("post-date").value = '';
    document.getElementById("post-time").value = '';
    document.getElementById("seats").value = '';
    document.getElementById("mobile").value = '';
}

// Function to search for rides
function searchRide(event) {
    event.preventDefault();

    // Get search criteria
    const origin = document.getElementById("origin").value.toLowerCase();
    const destination = document.getElementById("destination").value.toLowerCase();
    const date = document.getElementById("date").value;

    // Filter posted rides based on search criteria
    const filteredRides = postedRides.filter(ride => 
        ride.origin.toLowerCase().includes(origin) &&
        ride.destination.toLowerCase().includes(destination) &&
        ride.date === date
    );

    // Display the search results
    const searchResultDiv = document.getElementById("searchResult");
    searchResultDiv.innerHTML = ''; // Clear previous results

    if (filteredRides.length > 0) {
        filteredRides.forEach(ride => {
            const rideElement = document.createElement("div");
            rideElement.classList.add("ride-info");
            rideElement.innerHTML = `
                <p><strong>Origin:</strong> ${ride.origin}</p>
                <p><strong>Destination:</strong> ${ride.destination}</p>
                <p><strong>Date:</strong> ${ride.date}</p>
                <p><strong>Time:</strong> ${ride.time}</p>
                <p><strong>Seats Available:</strong> ${ride.seats}</p>
                <p><strong>Mobile Number:</strong> ${ride.mobile}</p>
            `;
            searchResultDiv.appendChild(rideElement);
        });
    } else {
        searchResultDiv.innerHTML = 'No rides found for the selected search criteria.';
    }
}
