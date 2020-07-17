$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
        name: $("#burger-add-input").val().trim(),
    };
    console.log("clicked")
    console.log(newBurger);


    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("Added burger!");
        // Reload the page to get the updated list
        location.reload();
    })
})

//update a burger 
$(function() {
  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");
    const devouredUpdate = $(this).data("devoured");
    console.log($(this).data("devoured"));

    const devouredState = {
      devoured: devouredUpdate
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed devoured to", devouredUpdate);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})