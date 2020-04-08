//get the buttons

//API
//From OMDI exercise 
const API_KEY = 'Bearer 4xXf6b67EXTMd9Mw4WkHO4-ivhSa7wSi252Lsi0Zvgs5FmNaSQVE2oTPH_1_tji5mVhZ4qhN_aq-jjGsK6Nrcgwic7UxQmaZNaEG43X_n5L054fE5WlbUdAMqgKJXnYx';
//Add CORS authorization code Corey sent
const BASE_URL = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?location=new-york&limit=50';

let storedRecommendations = [];

async function getInfoFromApi(searchTerm, price) {
  let urlWithParameter = BASE_URL + `&term=${searchTerm}`;

//DRY!!!!!!!!!!! 
  if (price == 1 || price == 2 || price == 3 || price == 4) {
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
//https://css-tricks.com/snippets/javascript/select-random-item-array/
function randonmlySelectItem(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}



setTimeout(() => {
  //getInfoFromApi('restaurant', 4);
}, 2000);

//https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/
function buttonEvents() {
  let dropdowns = document.querySelectorAll('select');
  for (i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("change", selectEvent);
  }
  
}
// trying to make async because it did not work without it
async function selectEvent() {
  let priceRange = this.options[this.selectedIndex].value;
  let apiResults = await getInfoFromApi("restaurant", priceRange);

  let randomItem = randonmlySelectItem(apiResults);
  console.log(randomItem);

  populateResultDiv(randomItem, document.getElementById("resultDiv"));
}

buttonEvents();
//create an array with results
function populateResultDiv(item, div) {
  let img = document.getElementById("resultImg");
  let name = document.getElementById("resultName");
  let address = document.getElementById("resultAddress");
  let phone = document.getElementById("resultPhone");
  let website = document.getElementById("resultWebsite");

  img.src = item.image_url;
  name.innerHTML = item.name;
  address.innerHTML = item.location.display_address[0] + '</br>' + item.location.display_address[1];
  phone.innerHTML = item.display_phone;
  website.href = item.url;

}
//randonmly pick one result to show

//render in the page in an expendable section