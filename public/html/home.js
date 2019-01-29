var session = sessionStorage;

function home() {
    "use strict";
    $(document).on('click', '.btn', function () {
        console.log("click");
        session.setItem("type", $(this).val());
        window.location.href = "question.html";
    });
}
