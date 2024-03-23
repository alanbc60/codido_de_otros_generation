// usamos una constante que hace referencia a la API de Github
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Los nombres de las variables es mejor que tengan un relacion con la información que queremos mostrar o el elemento HTML que hace referencia

// Si usamos el querySelector o el getElementById debemos colocar un $ al principio de la variable y ademas
// debemos que asegurarnos que dentro del querySelector la clase del elemento html se coloque con un punto y el id se coloque con un #.

const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');



// Siempre que usemos await, la funcion debe ser asincrona y eso lo indicamos con un async.
async function displayUser(username) {
  $name.textContent = 'cargando...';

  // se debe de envolver el bloque de la promesa en un try -catch, ya que la petición puede fallar, ya sea
  // por problemas de conectividad o la api no esta disponible.

  try {
    // Hacemos la solicitud HTTP por medio de Fetch y eso nos devuelve una promesa y lo guardamos en una variable.
    const response = await fetch(`${usersEndpoint}/${username}`);
    // Una vez que obtengamos la respuesta, necesitamos parsearla a JSON para trabajar con ella y debemos de ponerle await para esperar a la promesa. 
    const data = await response.json();
    console.log(data);
    
    // Cambiamos el contenido de las etiquetas p, por el nuevo que obtenemos desde la api
    // para ello no es necesario el uso de $ ni de comillas,ya que es una variable que ya tiene el valor.
    $name.textContent = data.name;
    $blog.textContent = data.blog;
    $location.textContent = data.location;    
  } catch (error) {
      throw new Error ('Error al consumir API');
  }

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Se actualiza nombre de la variable.
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);