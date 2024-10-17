// State: This is the data (state) that the program needs to remember so the functions can modify the state
const names = ["Alice", "Bob", "Carol", "Justin", "Jamison", "Jackson", "Lola"];
const occupation = ["Writer", "Teacher", "Programmer", "Marketer", "Designer", "Consulant", "Copywrighter"];
const prices = ["30", "35", "40", "45", "50", "60", "70"]
const maxFreelancers = 3; // This is the max number of freelancers to show at a time
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  }
];

// Function: Renders all freelancers on the web page
const renderFreelancers = () => {
  const tbody = document.querySelector('.table tbody');
  tbody.innerHTML = ''; // Clear existing rows

  freelancers.forEach((freelancer, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    tbody.appendChild(row);
  });

  updateAveragePrice(); // Update average price each time a freelancer is added
};

// Function: Adds a new freelancer to the list and updates the page
const addNewFreelancer = () => {
  // Generate a random freelancer
  const randomIndex = Math.floor(Math.random() * names.length);
  const newFreelancer = {
    name: names[randomIndex],
    occupation: occupation[randomIndex],
    price: prices[randomIndex]
  };

  // If max freelancers reached, replace the oldest freelancer
  if (freelancers.length >= maxFreelancers) {
    freelancers.shift(); // Remove the first freelancer (oldest)
  }

  freelancers.push(newFreelancer); // Add new freelancer
  renderFreelancers(); // Render the updated list
};

// Function: Calculates and updates the average starting price
const updateAveragePrice = () => {
  const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = (totalPrice / freelancers.length).toFixed(2); // Round to 2 decimal places

  // Update the paragraph text with the new average price
  const averagePriceElement = document.querySelector('#average-price');
  averagePriceElement.textContent = `The average starting price is $${averagePrice}`;
};

// Initial render
renderFreelancers();

// Add new freelancers every few seconds
setInterval(addNewFreelancer, 3000); // Adds a new freelancer every 3 seconds



