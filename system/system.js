function bookAppointment() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Perform validation
    if (!name || !email || !date || !time) {
      alert('Please fill in all fields');
      return;
    }
    
    // Display booking status
    var bookingStatus = document.getElementById('bookingStatus');
    bookingStatus.textContent = 'Booking in progress...';
    
    // Simulate booking process (replace with actual server-side code)
    setTimeout(function() {
      bookingStatus.textContent = 'Appointment booked successfully!';
    }, 2000);
  }
  