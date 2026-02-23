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
function downloadCertificate() {
    if(localStorage.getItem("webCourse") === "completed") {

        const userName = "Permjeet Singh"; // You can later make this dynamic

        const certificateContent = `
        ================================
              TECH HUB CERTIFICATE
        ================================

        This is to certify that

        ${userName}

        has successfully completed the
        Web Development Course

        Date: ${new Date().toLocaleDateString()}

        ================================
        `;

        const blob = new Blob([certificateContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "TechHub_Certificate.txt";
        link.click();

    } else {
        alert("Complete the course first to unlock certificate.");
    }
}
