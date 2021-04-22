// call the function

function myfunction() {
  let frank = document.getElementById('all-items');
    if (frank.style.display === "none") {
        frank.style.display = "block";
      } else {
        frank.style.display = "none";
    }


 let eze;

  eze = frank;
  eze.style.position = "absolute";
  eze.style.laft = "10%"
 eze.style.backgroundColor = "white";
  eze.style.top = "5%";
  eze.style.borderRadius = "5%";

 }


//vaiables

const formBtn = document.querySelector('.pro'),
       Email = document.querySelector('#email'),
       Firstname = document.querySelector('#first-name'),
       Lastname = document.querySelector('#last-name'),
       Password = document.getElementById('number');
     

            


       eventlisteners();

      function eventlisteners() {

        Email.addEventListener('blur', validatefield);
        Firstname.addEventListener('blur', validatefield);
        Lastname.addEventListener('blur', validatefield);
        Password.addEventListener('blur', validatefield);
      }

      function appInit() {
          disabled = true;
      }

      function validatefield() {
       
        validatelength(this);

        if (this.type === "email") {
          Emailtext(this);
        }


        let error;

      }

      function validatelength(field) {
          if (field.value.length > 0) {
              field.style.borderBottomColor = "green";
              field.classList.remove('error');
          } else {
            field.style.borderBottomColor = "red";
            field.classList.add('error');
          }
      }

      function Emailtext(field) {
          if (field.value.indexOf('@') !== -1) {
              field.style.borderBottomColor = "green";
              field.classList.remove('error');
          } else {
            field.style.borderBottomColor = "red";
            field.classList.add('error');
          }
      }
    const