// Fake login system
function loginUser() {
    alert("Login Successful (Demo Mode)");
}

// Course completion system
function completeCourse() {
    localStorage.setItem("webCourse", "completed");
    updateProgress();
    alert("Course Completed! 🎉");
}

function updateProgress() {
    const progressBar = document.querySelector(".progress-bar");
    if(localStorage.getItem("webCourse") === "completed") {
        progressBar.style.width = "100%";
    }
}

window.onload = function() {
    updateProgress();
};
