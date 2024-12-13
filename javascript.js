function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target); 
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    
    
    if (!firstname || !lastname) {
        document.getElementById("finalmessage").innerText = "Please fill in your first and last name!";
        document.getElementById("finalmessage").style.color = "red";
        return;
    }

    if (!email || !phone) {
        document.getElementById("finalmessage").innerText = "Please check if all information, including email and phone number, has been submitted correctly!";
        document.getElementById("finalmessage").style.color = "red";
        return;
    }

    document.getElementById("finalmessage").innerText = "Form Submitted!";
    document.getElementById("finalmessage").style.color = "green"
}