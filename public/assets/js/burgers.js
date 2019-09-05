// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() 
{
  $(".change-devoured").on("click", function(event) 
  {
    event.preventDefault();
    var id = $(this).data("id");

    console.log("devouring burger with id: " + id);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, 
    {
      type: "POST",
      data: { devoured: "1" }
    }).then(function() 
    {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
    });
  });

  $(".add-burger").on("submit", function(event) 
  {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = 
    {
      burger_name: $("#burger_name").val().trim(),
      devoured: 0
    };
    // Send the POST request.
    $.ajax("/api/burgers", 
    {
      type: "POST",
      data: newBurger
    }).then(function() 
    {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
    });
  });
});
