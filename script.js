
const propertyData = {
    'property1': {
        title: 'Modern Apartment',
        bedrooms: 2,
        bathrooms: 1,
        price: 1200,
        description: 'A beautiful modern apartment in the heart of the city. Features include updated kitchen, in-unit laundry, and a spacious balcony.',
        amenities: ['Air Conditioning', 'Dishwasher', 'In-unit Laundry', 'Parking'],
        images: ['apartment1.jpg', 'apartment2.jpg', 'apartment3.jpg'],
        location: '123 Main Street'
    },
    'property2': {
        title: 'Cozy Studio',
        bedrooms: 1,
        bathrooms: 1,
        price: 800,
        description: 'Perfect studio apartment for singles or couples. Newly renovated with modern finishes.',
        amenities: ['Air Conditioning', 'Pet Friendly', 'Storage Unit'],
        images: ['studio1.jpg', 'studio2.jpg'],
        location: '456 Oak Avenue'
    },
    'property3': {
        title: 'Family House',
        bedrooms: 3,
        bathrooms: 2,
        price: 2000,
        description: 'Spacious family home with a large backyard. Perfect for families looking for a quiet neighborhood.',
        amenities: ['Garage', 'Backyard', 'Fireplace', 'Central Heating'],
        images: ['house1.jpg', 'house2.jpg', 'house3.jpg'],
        location: '789 Pine Road'
    }
};

// Update your property cards to include data-id attributes
document.querySelectorAll('.property-card button').forEach((button, index) => {
    button.setAttribute('data-id', `property${index + 1}`);
    button.onclick = openPropertyModal;
});

function openPropertyModal(event) {
    const propertyId = event.target.getAttribute('data-id');
    const property = propertyData[propertyId];
    const modal = document.getElementById('propertyModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <h2>${property.title}</h2>
        <p class="location">${property.location}</p>
        <div class="property-images">
            <img src="${property.images[0]}" alt="${property.title}" style="width: 100%; max-height: 400px; object-fit: cover;">
        </div>
        <div class="property-details">
            <h3>$${property.price}/month</h3>
            <p>${property.bedrooms} Bedrooms • ${property.bathrooms} Bathrooms</p>
            <h4>Description</h4>
            <p>${property.description}</p>
            <h4>Amenities</h4>
            <ul>
                ${property.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
            </ul>
            <button class="contact-button">Contact Landlord</button>
            <button class="schedule-viewing">Schedule Viewing</button>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal when clicking the X
document.querySelector('.close').onclick = function() {
    document.getElementById('propertyModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('propertyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
