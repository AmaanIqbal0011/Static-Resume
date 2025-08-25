document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phoneNo = document.getElementById('phone-no').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        localStorage.setItem("resume", JSON.stringify({
            name: name,
            email: email,
            phoneNo: phoneNo,
            education: education,
            workExperience: workExperience,
            skills: skills
        }));
        window.location.href = "useroutput.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var resumeData = JSON.parse(localStorage.getItem("resume") || '{}');
    // add user data into resume data
    document.getElementById('user-name').textContent = "Name: ".concat(resumeData.name || '');
    document.getElementById('user-email').textContent = "Email: ".concat(resumeData.email || '');
    document.getElementById('user-number').textContent = "Contact No: ".concat(resumeData.phoneNo || '');
    document.getElementById('edu-det').textContent = resumeData.education || '';
    document.getElementById('user-skill').textContent = resumeData.skills || '';
    document.getElementById('user-exp').textContent = resumeData.workExperience || '';
});
