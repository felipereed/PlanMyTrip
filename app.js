//get the buttons

//API
//From OMDI exercise 
const API_KEY = 'Bearer 4xXf6b67EXTMd9Mw4WkHO4-ivhSa7wSi252Lsi0Zvgs5FmNaSQVE2oTPH_1_tji5mVhZ4qhN_aq-jjGsK6Nrcgwic7UxQmaZNaEG43X_n5L054fE5WlbUdAMqgKJXnYx';
//Add CORS authorization code Corey sent
const BASE_URL = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?location=new-york&limit=50';

async function getInfoFromApi(searchTerm, price) {
  let urlWithParameter = BASE_URL + `&term=${searchTerm}`;

//DRY!!!!!!!!!!! 
  if (price === 1 || price === 2 || price === 3 || price === 4) {
    urlWithParameter = urlWithParameter + `&price=${price}`;
  }
  let response = await axios.get(urlWithParameter, {
    headers: {
      "Authorization": API_KEY,
      "Access-Control-Allow-Headers": "*"
    }

  });

  console.log(response);
  return response.data.businesses;
}

function randonmlySelectItem() {
  Math.floor(Math.random()*myArray.length)
}


// setTimeout(() => {
//   getInfoFromApi('restaurant');
// }, 2000);



//create an array with results

//randonmly pick one result to show

//render in the page in an expendable section