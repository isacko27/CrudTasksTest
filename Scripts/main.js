

//Iniciar sesión
/*
let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

let urlencoded = new URLSearchParams();
urlencoded.append("email", "erik@academlo.com");
urlencoded.append("password", "secret");

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://tasks-crud.academlo.com/api/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => {
	
	
})
  .catch(error => console.log('error', error));
*/

/*
//Lista de tareas

let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", 'Bearer ' + '1500|pv9lbRtqhcPx9EyD6kvosnm8D96Vr4wleH4QUd4C');

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://tasks-crud.academlo.com/api/tasks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

/*
//Buscar una tarea

let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", 'Bearer ' + '1500|pv9lbRtqhcPx9EyD6kvosnm8D96Vr4wleH4QUd4C');

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://tasks-crud.academlo.com/api/tasks/416", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

/*

//Agregar tarea
let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", 'Bearer ' + '1500|pv9lbRtqhcPx9EyD6kvosnm8D96Vr4wleH4QUd4C');

let urlencoded = new URLSearchParams();
urlencoded.append("name", "Nueva tarea");
urlencoded.append("description", "Descripción de la nueva tarea");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://tasks-crud.academlo.com/api/tasks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

/*
//Modificar tarea

let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", 'Bearer ' + '1500|pv9lbRtqhcPx9EyD6kvosnm8D96Vr4wleH4QUd4C');

let urlencoded = new URLSearchParams();
urlencoded.append("name", "Nueva tarea modificada");
urlencoded.append("description", "Descripción de la nueva tarea modificada");

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://tasks-crud.academlo.com/api/tasks/425", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

/*
//Modificar status de una tarea

let myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", 'Bearer ' + '1500|pv9lbRtqhcPx9EyD6kvosnm8D96Vr4wleH4QUd4C');

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://tasks-crud.academlo.com/api/tasks/425/status/3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/





