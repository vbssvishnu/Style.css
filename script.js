document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const uniqueId = document.getElementById('uniqueId').value.trim();

    if (productDetails.hasOwnProperty(uniqueId)) {
        const details = productDetails[uniqueId];
        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = `
            <h3>Product Details:</h3>
            <p><strong>Name:</strong> ${details.name}</p>
            <p><strong>Description:</strong> ${details.description}</p>
            <p><strong>Price:</strong> ${details.price}</p>
            <p><strong>Availability:</strong> ${details.availability}</p>
        `;
    } else {
        alert('Invalid Unique ID. Please try again.');
        document.getElementById('detailsContainer').innerHTML = ''; // Clear details container
    }
});
