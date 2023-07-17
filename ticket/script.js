function handleCheckout(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.getElementById('payment').value;
  
    // Create the checkout summary
    const checkoutSummary = `
      <h3>Order Summary</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Ticket Quantity:</strong> ${quantity}</p>
      <p><strong>Payment Method:</strong> ${paymentMethod}</p>
      <p><strong>Total Amount:</strong> $${calculateTotal(quantity)}</p>
    `;
  
    // Display the checkout summary on the page
    const checkoutSection = document.getElementById('checkout');
    checkoutSection.innerHTML = checkoutSummary;
  }
  
  function calculateTotal(quantity) {
    const ticketPrice = 20; // Price per ticket
    return quantity * ticketPrice;
  }
  