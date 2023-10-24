/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Izzie Vazquez',
    photo: 'images/izzie.jpg',
    favoriteFoods: ['Green olives', 'French fries', 'Chicken noodle soup', 'Picadillo', 'Mozzarella cheese'],
    hobbies: ['Drawing', 'Playing video games', 'Cooking', 'Collecting dolls', 'Writing'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Rexburg, ID, USA',
        length: '1 year'
    },
    {
        place: 'High Bridge, NJ, USA', 
        length: '6.5 years'
    },
    {
        place: 'Stillwater, NJ, USA',
        length: '12 years'
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const dl = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    // Create <dt> element and set its text content to the place property.
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    // Create <dd> element and set its text content to the length property.
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    // Append <dt> and <dd> elements to the <dl> element.
    dl.appendChild(dt);
    dl.appendChild(dd);
});