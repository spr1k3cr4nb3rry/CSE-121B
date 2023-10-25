/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = []; 

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
      let article = document.createElement('article');

      let h3 = document.createElement('h3');
      h3.textContent = temple.templeName;

      let img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      article.appendChild(h3);
      article.appendChild(img);
  
      templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    if (response.ok) {
        templeList = await response.json();
    } else {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    
    displayTemples();
}

/* reset Function */
const reset = function() {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* sortBy Function */
const sortBy = function (temples) {
    reset();
  
    const filter = document.getElementById('sortBy').value;
  
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter value.');
    }
  };

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {
    sortBy(templeList);
});

getTemples();