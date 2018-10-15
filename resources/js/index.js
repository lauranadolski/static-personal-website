
function displayProjects() {
    console.log("Show me the projects, please.")
    
    let displayProjectsDiv = document.getElementById("projectsDisplay");

    if (displayProjectsDiv.style.display === "none") {
        displayProjectsDiv.style.display = "block";
    } else {
        displayProjectsDiv.style.display = "none";
    }
}

function displayAboutMe() {
    console.log("Show me the about me, please.")
    let displayAboutMeDiv = document.getElementById("aboutMeDisplay");

    if (displayAboutMeDiv.style.display === "none") {
        displayAboutMeDiv.style.display = "block";
    } else {
        displayAboutMeDiv.style.display = "none";
    }
}

function displayContactInformation() {
    console.log("Show me the contact info, please.")

    let displayContactInfoDiv = document.getElementById("contactInfoDisplay");

    if (displayContactInfoDiv.style.display === "none") {
        displayContactInfoDiv.style.display = "block";
    } else {
        displayContactInfoDiv.style.display = "none";
    }
}