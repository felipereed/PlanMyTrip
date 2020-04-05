# Plan My Trip
Project One

- **App Title**: Plan My Trip

- **App Description**: Visiting a city like NYC can be overwhelming. So much to do, so many options! Plan My Trip is a website that randomly generates recommendations of the top rated attractions such as museums, art galleries, restaurants and more.

- **API**: I'm using the Yelp Fusion API. I will be getting information about the attractions, such as location, rating, category, contact info, and images.

- **API Snippet**: 
```json
 {
            "id": "jv0Gu4wXNuyaoJMBOXqfVQ",
            "alias": "guggenheim-museum-new-york",
            "name": "Guggenheim Museum",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CafLAiRyTmM578KrHEU2kg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/guggenheim-museum-new-york?adjust_creative=fJF2xokaIgQsmNLuav5etQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fJF2xokaIgQsmNLuav5etQ",
            "review_count": 1001,
            "categories": [
                {
                    "alias": "museums",
                    "title": "Museums"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 40.78301,
                "longitude": -73.95912
            },
            "transactions": [],
            "location": {
                "address1": "1071 5th Ave",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10128",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "1071 5th Ave",
                    "New York, NY 10128"
                ]
            },
            "phone": "+12124233500",
            "display_phone": "(212) 423-3500",
            "distance": 9146.327050366197
        }
```

- **Wireframes**:  The proposed layout and design of your app. Create mockups for multiple views, including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations.

- **MVP**: 
The website will have the following capabilities:
1. Provide the user recommendations for a day in the city including meals, museums, and art galleries.
2. The recommendations will include an image, an address, a phone number and a website link. Attractions that are missing such basic information in the API will be excluded. 
3. The recommendations will be from the restaurants and museums categories. 

- **Post-MVP**: 
1. Add additional recommendation categories such as bars, parks, and outdoor activities. 
2. Recommendations should be illustrated with images from the Instagram API (hashtags).
3. let user filter recommendations by price, location, and rating.

- **Goals**: 
| **Monday**              | **Tuesday**                       | **Wednesday**                       | **Thursday**         |
| ------------------------|-----------------------------------| ------------------------------------| ---------------------|
| Project Pitch           | Test and improve recommendation   | Implement new categories            | Start post-MVP       |
| Project Approval        | Implement images and other content| Test and improve new feature        | Test added features  |
| HTML/CSS/JS Boilerplate | Test and improve new content      | Verify all MVP features are working | Prepare Presentation |
| Pull info from API      |                                   |                                     |                      |
| Display recommendation  |                                   |                                     |                      


- **Priority Matrix**: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority.

- **Timeframes**: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Are you interested in styling your README.md to make it look nice? Don't know how to include photos or create links? Check out this [Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!