const projectData = [{
        title: "Spaghetti Western Hangman",
        image: "assets/images/hangman.jpg",
        repo: "https://github.com/sunkstingray/Hangman-Game",
        hosted: "https://sunkstingray.github.io/Hangman-Game/",
        description: "Spaghetti Western themed hangman game created using JavaScript, CSS, and HTML."
},
{
        title: "Spaghetti Western Hangman",
        image: "assets/images/hangman.jpg",
        repo: "https://github.com/sunkstingray/Hangman-Game",
        hosted: "https://sunkstingray.github.io/Hangman-Game/",
        description: "Spaghetti Western themed hangman game created using JavaScript, CSS, and HTML."
},
{
        title: "Spaghetti Western Hangman",
        image: "assets/images/hangman.jpg",
        repo: "https://github.com/sunkstingray/Hangman-Game",
        hosted: "https://sunkstingray.github.io/Hangman-Game/",
        description: "Spaghetti Western themed hangman game created using JavaScript, CSS, and HTML."
}]

function htmlFormat(id) {
        let proj = "<img class='img-fluid' src='"+projectData[id].image+"'</img>"+"<p>"+projectData[id].description+"</p>"+"<a class='btn btn-secondary' href='"+projectData[id].hosted+"' role='button'>Live View</a>"+"&nbsp <a class='btn btn-light' href='"+projectData[id].repo+"' role='button'>GitHub Repo</a>";
        return proj;
}

// Thanks to Maaaaark - https://github.com/maaaaark/bcSwipe/blob/master/jquery.bcSwipe.min.js
!function (t) { t.fn.bcSwipe = function (e) { var n = { threshold: 50 }; return e && t.extend(n, e), this.each(function () { function e(t) { 1 == t.touches.length && (u = t.touches[0].pageX, c = !0, this.addEventListener("touchmove", o, !1)) } function o(e) { if (c) { var o = e.touches[0].pageX, i = u - o; Math.abs(i) >= n.threshold && (h(), t(this).carousel(i > 0 ? "next" : "prev")) } } function h() { this.removeEventListener("touchmove", o), u = null, c = !1 } var u, c = !1; "ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1) }), this } }(jQuery);

// Swipe functions for Bootstrap Carousel
$('.carousel').bcSwipe({ threshold: 50 });

$('#info').click(function () {
        $('#info-modal').modal();
});

// $('.project').click(function () {
//         $('#info-modal').modal();
// });

$(".project").on('click', function (e) {
        $('#project-modal').modal('toggle', $(this));
});

//      $('#info-modal').on('show.bs.modal', function (event) {
//         var button = $(event.relatedTarget) // Button that triggered the modal
//         console.log("project: "+button.data('project'));
//      })


$('#project-modal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let projectId = button.data('project') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        let modal = $(this)
        let projectBody = htmlFormat(projectId);
        console.log(projectBody);
        modal.find('.modal-title').text(projectData[projectId].title)
        modal.find('.modal-body').html(projectBody)
        console.log("project id: " + projectId);
})

