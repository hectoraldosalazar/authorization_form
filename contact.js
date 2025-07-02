import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = 
      e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
    if(!auth){
      e.target.querySelector('input[type="password"]').value='';
    }
  }

//Define el formato login
  const login = (
    <form action="#" onSubmit={handleSubmit}>
    <input type="password" placeholder="Password" />
    <input type="submit" />
    </form>
  );

//Separa la informacion de contacto en una variable independiente
  const contactInfo = (
    <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
  );

  //Si el usuario introduce la contraseña correcta muestra los datos de contacto

  return (
      <div id="authorization">
        <h1>{authorized === true ? 'Contact' : 'Enter the Password'}</h1>
        {authorized === true ? contactInfo : login}
      </div>
  );
}

export default Contact;
