$(document).ready(function () {
  $("#quote-form").submit(function (e) {
    e.preventDefault();

    var nameRegex = /^[A-Za-z\s'-]{1,50}$/;
    var lengthRegex = /^\d{10}$/;
    var formatRegex = /^(07|01)/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get form input values
    var name = $("#qname").val();
    var email = $("#qemail").val();
    var phone = $("#qphone").val();
    var services = $("#services").val();

    var formData = {
      name: name,
      email: email,
      phone: phone,
      services: services,
    };

    // Validation
    var errorMessages = [];

    if (name === "") {
      errorMessages.push("Please fill in the Name field!");
      $("#qnamerror").text("Please fill in the Name field!");
    } else if (!nameRegex.test(name)) {
      errorMessages.push("Please enter a valid Name!");
      $("#qnamerror").text("Please fill in the Name field!");
    } else {
      $("#qnamerror").text("");
    }

    if (email === "") {
      errorMessages.push("Please fill in the E-mail field!");
      $("#qemailerror").text("Please fill in the E-mail field!");
    } else if (!emailRegex.test(email)) {
      errorMessages.push("Please enter a valid E-mail address!");
      $("#qemailerror").text("Please enter a valid E-mail address!");
    } else {
      $("#qemailerror").text("");
    }

    if (phone === "") {
      errorMessages.push("Please fill in the Phone Number field!");
      $("#qphonerror").text("Please fill in the Phone Number field!");
    } else if (!lengthRegex.test(phone)) {
      errorMessages.push("Please enter a Phone Number with 10 digits!");
      $("#qphonerror").text("Please enter a Phone Number with 10 digits!");
    } else if (!formatRegex.test(phone)) {
      errorMessages.push(
        "Please enter a Phone Number starting with '07' or '01'!"
      );
      $("#qphonerror").text(
        "Please enter a Phone Number starting with '07' or '01'!"
      );
    } else {
      $("#qphonerror").text("");
    }

    if (errorMessages.length === 0) {
      $.ajax({
        type: "POST",
        url: "https://gray-plain-sheep.cyclic.cloud/send-email",
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          $("#successmsg").text("Thank you for reaching out!");

          setTimeout(function () {
            $("#successmsg").text("");
            $("#quote-form")[0].reset();
          }, 3000);
        },
        error: function (error) {
          alert("Error: " + error.statusText);
        },
      });
    }
  });
});

$(document).ready(function () {
  $("#about-form").submit(function (e) {
    e.preventDefault();

    var nameRegex = /^[A-Za-z\s'-]{1,50}$/;
    var lengthRegex = /^\d{10}$/;
    var formatRegex = /^(07|01)/;

    // Get form input values
    var name = $("#aname").val();
    var phone = $("#aphone").val();
    var services = $("#aservices").val();

    var formData = {
      name: name,
      phone: phone,
      services: services,
    };

    // Validation
    var errorMessages = [];

    if (name === "") {
      errorMessages.push("Please fill in the Name field!");
      $("#anamerror").text("Please fill in the Name field!");
    } else if (!nameRegex.test(name)) {
      errorMessages.push("Please enter a valid Name!");
      $("#anamerror").text("Please fill in the Name field!");
    } else {
      $("#anamerror").text("");
    }

    if (phone === "") {
      errorMessages.push("Please fill in the Phone Number field!");
      $("#aphonerror").text("Please fill in the Phone Number field!");
    } else if (!lengthRegex.test(phone)) {
      errorMessages.push("Please enter a Phone Number with 10 digits!");
      $("#aphonerror").text("Please enter a Phone Number with 10 digits!");
    } else if (!formatRegex.test(phone)) {
      errorMessages.push(
        "Please enter a Phone Number starting with '07' or '01'!"
      );
      $("#aphonerror").text(
        "Please enter a Phone Number starting with '07' or '01'!"
      );
    } else {
      $("#qphonerror").text("");
    }

    if (errorMessages.length === 0) {
      $.ajax({
        type: "POST",
        url: "https://gray-plain-sheep.cyclic.cloud/send-email",
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          $("#smsg").text("Thank you for reaching out!");

          setTimeout(function () {
            $("#smsg").text("");
            $("#about-form")[0].reset();
          }, 3000);
        },
        error: function (error) {
          alert("Error: " + error.statusText);
        },
      });
    }
  });
});

$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();

    var nameRegex = /^[A-Za-z\s'-]{1,50}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var lengthRegex = /^\d{10}$/;
    var formatRegex = /^(07|01)/;

    var name = $("#cname").val();
    var email = $("#cemail").val();
    var phone = $("#cphone").val();
    var subject = $("#csubject").val();
    var message = $("#cmessage").val();

    var formData = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    var errorMessages = [];

    if (name === "") {
      errorMessages.push("Please fill in the Name field!");
      $("#cnamerror").text("Please fill in the Name field!");
    } else if (!nameRegex.test(name)) {
      errorMessages.push("Please enter a valid Name!");
      $("#cnamerror").text("Please enter a valid Name!");
    } else {
      $("#cnamerror").text("");
    }

    if (email === "") {
      errorMessages.push("Please fill in the Email field!");
      $("#cemailerror").text("Please fill in the Email field!");
    } else if (!emailRegex.test(email)) {
      errorMessages.push("Please enter a valid Email address!");
      $("#cemailerror").text("Please enter a valid Email address!");
    } else {
      $("#cemailerror").text("");
    }

    if (phone === "") {
      errorMessages.push("Please fill in the Phone Number field!");
      $("#cphonerror").text("Please fill in the Phone Number field!");
    } else if (!lengthRegex.test(phone)) {
      errorMessages.push("Please enter a Phone Number with 10 digits!");
      $("#cphonerror").text("Please enter a Phone Number with 10 digits!");
    } else if (!formatRegex.test(phone)) {
      errorMessages.push(
        "Please enter a Phone Number starting with '07' or '01'!"
      );
      $("#cphonerror").text(
        "Please enter a Phone Number starting with '07' or '01'!"
      );
    } else {
      $("#qphonerror").text("");
    }

    if (subject === "") {
      errorMessages.push("Please fill in the Subject field!");
      $("#csubjecterror").text("Please fill in the Subject field!");
    } else {
      $("#csubjecterror").text("");
    }

    if (message === "") {
      errorMessages.push("Please fill in the Message field!");
      $("#cmessagerro").text("Please fill in the Message field!");
    } else {
      $("#cmessagerro").text("");
    }

    if (errorMessages.length === 0) {
      $.ajax({
        type: "POST",
        url: "https://gray-plain-sheep.cyclic.cloud/contact-email",
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          $("#msg").text("Thank you for reaching out!");

          setTimeout(function () {
            $("#msg").text("");
            $("#contact-form")[0].reset();
          }, 3000);
        },
        error: function (error) {
          alert("Error: " + error.statusText);
        },
      });
    }
  });
});
