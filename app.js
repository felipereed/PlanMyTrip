//get the buttons

//API
const API_KEY = 'Bearer 4xXf6b67EXTMd9Mw4WkHO4-ivhSa7wSi252Lsi0Zvgs5FmNaSQVE2oTPH_1_tji5mVhZ4qhN_aq-jjGsK6Nrcgwic7UxQmaZNaEG43X_n5L054fE5WlbUdAMqgKJXnYx';
const BASE_URL = 'https://api.yelp.com/v3/businesses/search?';
//add the authorization to the axios from https://flaviocopes.com/axios-send-authorization-header/
function getInfoFromApi(searchTerm) {
  let urlWithParameter = BASE_URL + `term=${searchTerm}&location=new-york&limit=50`;

  
  
  let response = axios.get(urlWithParameter, {
    headers: {
      "Authorization": API_KEY,
      "Access-Control-Allow-Headers": "*"
    }
  });


  console.log(response);




}
setTimeout(() => {
  getInfoFromApi('restaurant');
}, 2000);



//create an array with results

//randonmly pick one result to show

//render in the page in an expendable section