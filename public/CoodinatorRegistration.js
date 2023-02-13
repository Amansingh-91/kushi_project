const form = document.querySelector("#register");

console.log(form);

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  if (formProps.password != formProps.conf_password) {
    alert("Passwords do not match.");
  } else {
    fetch("http://localhost:3000/coordinator_register", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(formProps),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(res=>{
        return res.json();
    }).then(data=>{
        if(data.success){
            alert("Registration successfull");
            form.reset();
        }
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
  }
}

form.addEventListener("submit", handleSubmit);
