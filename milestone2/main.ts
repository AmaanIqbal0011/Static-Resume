document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;

    form.addEventListener("submit",(event) => {
       event.preventDefault()

       const name = (document.getElementById('name') as HTMLInputElement).value;
       const email = (document.getElementById('email') as HTMLInputElement).value;
       const phoneNo = (document.getElementById('phone-no') as HTMLInputElement).value;
       const education = (document.getElementById('education') as HTMLTextAreaElement).value;
       const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
       const skills = (document.getElementById('skills') as HTMLInputElement).value;


       localStorage.setItem("resume",JSON.stringify({
        name,
        email,
        phoneNo,
        education,
        workExperience,
        skills
       }))
       window.location.href = "useroutput.html"
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const resumeData = JSON.parse(localStorage.getItem("resume") || '{}')

    // add user data into resume data

    document.getElementById('user-name')!.textContent = `Name: ${resumeData.name || ''}`;
    document.getElementById('user-email')!.textContent = `Email: ${resumeData.email || ''}`;
    document.getElementById('user-number')!.textContent = `Contact No: ${resumeData.phoneNo || ''}`;
    document.getElementById('edu-det')!.textContent = resumeData.education || '';
    document.getElementById('user-skill')!.textContent = resumeData.skills || '';
    document.getElementById('user-exp')!.textContent = resumeData.workExperience || '';
})