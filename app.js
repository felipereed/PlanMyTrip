//this is the API key formatted for the authorization header
const API_KEY = 'Bearer 4xXf6b67EXTMd9Mw4WkHO4-ivhSa7wSi252Lsi0Zvgs5FmNaSQVE2oTPH_1_tji5mVhZ4qhN_aq-jjGsK6Nrcgwic7UxQmaZNaEG43X_n5L054fE5WlbUdAMqgKJXnYx';
//Add CORS authorization code Corey sent plus the base API url
const BASE_URL = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?location=new-york&limit=50';

//this function calls the API passing the searchTerm and price, if there's one
async function getInfoFromApi(searchTerm, price) {
  let urlWithParameter = BASE_URL + `&term=${searchTerm}`;

  if (price == 1 || price == 2 || price == 3 || price == 4) {
    urlWithParameter = urlWithParameter + `&price=${price}`;
  }
  // add header to axios solution https://github.com/axios/axios/issues/1744
  let response = await axios.get(urlWithParameter, {
    headers: {
      'Authorization': API_KEY
    }

  });

  console.log(response);
  //returns the response from the API 
  return response.data.businesses;
}
//https://css-tricks.com/snippets/javascript/select-random-item-array/
//this function randomly selects one object from the array and returns it
function randonmlySelectItem(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

//https://mkyong.com/javascript/javascript-get-selected-value-from-dropdown-list/
//this function contains all the buttons and dropdowns and adds the event listeners
function buttonEvents() {
  
  let breakfastDropdown = document.querySelector('.breakfast > select');
  let lunchDropdown = document.querySelector('.lunch > select');
  let dinnerDropdown = document.querySelector('.dinner > select');
  let museumButton = document.querySelector('.museum > button');
  let parkButton = document.querySelector('.park > button');
  let landmarkButton = document.querySelector('.landmark > button');
  let rooftopButton = document.querySelector('.rooftop > button');

  
  let closeBreakfastRecommendation = document.getElementById('closeBreakfastRecommendation');
  let closeLunchRecommendation = document.getElementById('closeLunchRecommendation');
  let closeMuseumRecommendation = document.getElementById('closeMuseumRecommendation');
  let closeParkRecommendation = document.getElementById('closeParkRecommendation');
  let closeDinnerRecommendationButton = document.getElementById('closeDinnerRecommendation');
  let closeLandmarkRecommendation = document.getElementById('closeLandmarkRecommendation');
  let closeRooftopRecommendation = document.getElementById('closeRooftopRecommendation');

  breakfastDropdown.addEventListener('change', selectBreakfast);
  lunchDropdown.addEventListener('change', selectLunch);
  dinnerDropdown.addEventListener('change', selectDinner);
  museumButton.addEventListener('click', buttonMuseum);
  parkButton.addEventListener('click', buttonPark);
  landmarkButton.addEventListener('click', buttonLandmark);
  rooftopButton.addEventListener('click', buttonRooftop)

  closeBreakfastRecommendation.addEventListener('click', hideResultSection);
  closeLunchRecommendation.addEventListener('click', hideResultSection);
  closeMuseumRecommendation.addEventListener('click', hideResultSection);
  closeParkRecommendation.addEventListener('click', hideResultSection);
  closeDinnerRecommendationButton.addEventListener('click', hideResultSection);
  closeLandmarkRecommendation.addEventListener('click', hideResultSection);
  closeRooftopRecommendation.addEventListener('click', hideResultSection);
}
//this function calls the API, gets a random item from the results and call the populateResultSection function below to display info on the page
async function makeRecommendation(searchTerm, priceRange) {
  let apiResults = await getInfoFromApi(searchTerm, priceRange);
  let randomItem = randonmlySelectItem(apiResults);
  console.log(randomItem);
  populateResultSection(randomItem, searchTerm);
}
//Event handlers that will call the function makeRecommendation() above
async function selectBreakfast() {
  let priceRange = this.options[this.selectedIndex].value;
  makeRecommendation('Breakfast', priceRange);
}

async function selectLunch() {
  let priceRange = this.options[this.selectedIndex].value;
  makeRecommendation('Lunch', priceRange);
}

async function selectDinner() {
  let priceRange = this.options[this.selectedIndex].value;
  makeRecommendation('Dinner', priceRange);
}

async function buttonMuseum() {
  makeRecommendation('Museum');
}

async function buttonPark() {
  makeRecommendation('Park');
}

async function buttonLandmark() {
  makeRecommendation('Landmark');
}

async function buttonRooftop() {
  makeRecommendation('Rooftop');
}

buttonEvents();
//this function populates the result section added under each category on the page. It also sets the display to block so it shows up. 
function populateResultSection(item, category) {
  let img = document.getElementById('resultImg' + category);
  let name = document.getElementById('resultName' + category);
  let address = document.getElementById('resultAddress' + category);
  let phone = document.getElementById('resultPhone' + category);
  let website = document.getElementById('resultWebsite' + category);
// the section below sets all the properties of the elements in the result section 
  img.src = item.image_url;
  name.innerHTML = item.name;
  address.innerHTML = item.location.display_address[0] + '</br>' + item.location.display_address[1];
  phone.innerHTML = item.display_phone;
  website.href = item.url;
// so far the recommendation is invisible, this code displays it after the elements are populated
  img.parentElement.style.display = 'block';
}

// toggle hide and show solution https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function hideResultSection() {
  this.parentElement.style.display = 'none';
  
}