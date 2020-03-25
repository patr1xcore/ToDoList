$(document).ready(function() {
    // complete / uncomplete specific task on click
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    // add task on pressing Enter in the input field
    $("input").keypress(function(event) {
        if(event.which === 13) {
            var newTask = $("input").val();
            $("input").val("");
            $("ul").append("<li><span>X </span>" + newTask + "</li>");
            $("span").addClass("remove");
        }
    });

    // delete specific task on clicking X
    $("ul").on("click", ".remove", function(event) {
       $(this).parent().fadeOut(500, function() {
        $(this).remove();
       });
       event.stopPropagation();
    });

    // toggle input field on clicking + / -
    var inputVisible = false;

    $("#toggleInput").on("click", function() {
        if (!inputVisible) {
            $("#toggleInput").text("-");
            $("input").slideDown();
            inputVisible = true;
            }

        else {
            $("#toggleInput").text("+");
            $("input").slideUp();
            inputVisible = false;
            }
    });
});

