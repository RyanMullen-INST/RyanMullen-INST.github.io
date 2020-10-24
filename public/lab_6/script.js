// You may wish to find an effective randomizer function on MDN.

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

// Randomizer works: 5:10 PM
function randomize(max) {
  const num = Math.floor(Math.random() * Math.floor(max));
  console.log(num);
  return num;
}

function createCountries() {
  // somehow create the overall countries array if not able to access directly
  /* it should pass through from the server as json, parse in the fromserver => fromserver.json() step, 
  and be available in the final chained step with no real handling as long as 
  it's being res.json'd correctly from the server */
}

/*
function processThis(array){
  // things
}

fetch()
.then(dataFromFetch => dataFromFetch.json())
.then(json => processThis(json)) 
*/

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // You're going to do your lab work in here. Replace this comment.
      // Array name IS fromServer
      // console.log(countries); // This line may be obsolete
      console.log('fromServer', fromServer);
      // console.log(fromServer);
    })
    .catch((err) => console.log(err));
});