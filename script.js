// Function to handle checkbox behavior
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    checkboxes.forEach(cb => {
      if (cb !== this) {
        cb.checked = false;
      }
    });
  });
});

$(function() {
  $(document).on({
    mouseover: function(event) {
      $(this).find('.far').addClass('star-over');
      $(this).prevAll().find('.far').addClass('star-over');
    },
    mouseleave: function(event) {
      $(this).find('.far').removeClass('star-over');
      $(this).prevAll().find('.far').removeClass('star-over');
    }
  }, '.rate');

  $(document).on('click', '.rate', function() {
    if (!$(this).find('.star').hasClass('rate-active')) {
      $(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
      $(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
      $(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
    } else {
      console.log('has');
    }
  });
});

// Get the submit button element by its id
var submitButton = document.getElementById('submitBtn');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Redirect the user to feedback.html
  window.location.href = 'feedback.html';
});
