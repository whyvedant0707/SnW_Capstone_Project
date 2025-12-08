

console.log("Connectify JS Loaded");

var siteName = "CONNECTIFY";
var userLoggedIn = false;

var exploreTopics = ["nature", "travel", "food", "fitness", "art", "music", "book", "photography", "gaming", "movie", "tech", "comedy", "fashion"];
console.log("Explore topics:", exploreTopics);

var userProfile = {
    username: "_why_ved.ant",
    bio: "Web Developer | Tech Enthusiast | Dreamer",
    followers: 250
};

function welcomeMessage() {
    console.log("Welcome to", siteName);
}

welcomeMessage();


// HOME_PAGE

if (document.getElementById("home_page")) {
    var homeBtn = document.querySelector(".btn_primary");

    if (homeBtn) {
        homeBtn.addEventListener("mouseover", function() {
            console.log("User hovered Get Started button");
        });
    }
}


// EXPLORE_PAGE

if (document.getElementById("explore_page")) {

    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            console.log("Opened explore topic:", card.id);
        });
    });

    var exploreTitle = document.querySelector(".section_title");
    if (exploreTitle) {
        exploreTitle.style.color = "lightblue";
    }
}


// ABOUT_PAGE

if (document.getElementById("about-page")) {
    var contactCard = document.querySelector(".contact_card");

    if (contactCard) {
        contactCard.addEventListener("mouseenter", function() {
            contactCard.style.backgroundColor = "#222";
            console.log("User hovered contact card");
        });

        contactCard.addEventListener("mouseleave", function() {
            contactCard.style.backgroundColor = "";
        });
    }
}


// PROFILE_PAGE

if (document.getElementById("profile_page")) {

    var bio = document.querySelector(".bio");

    if (bio) {
        bio.addEventListener("click", function() {
            alert("You clicked on bio!");
        });
    }

    var usernameElement = document.querySelector(".username");
    if (usernameElement) {
        console.log("Profile Username:", userProfile.username);
    }
}


// LOGIN_PAGE

if (document.getElementById("login_page")) {

    var form = document.querySelector(".auth_form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            var inputs = document.querySelectorAll(".form_input");
            var username = inputs[0].value;
            var password = inputs[1].value;

            if (username === "" || password === "") {
                alert("Please fill both fields");
            } else {
                alert("Logged in as " + username);
                userLoggedIn = true;
            }
        });
    }
}


// NAVBAR_ACTIVE_LINK_FIX

var navItems = document.querySelectorAll(".nav_item");

navItems.forEach(function(nav) {
    nav.addEventListener("click", function() {
        navItems.forEach(function(n) {
            n.classList.remove("active");
        });
        nav.classList.add("active");
    });
});