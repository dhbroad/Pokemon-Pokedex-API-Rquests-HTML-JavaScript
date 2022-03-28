console.log("hello week-7-day-3-hw")
// fetch is an async function.. this method is using async and wait

const getData = async (name) => {
    // the two lines below are used pretty much every time you set something like this up
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await res.json() // converting res to json. .json() is a promise, so we have to use await
    let pokemonName = name
    let pokemonImg = data.sprites.front_default
    let pokemonList=[pokemonName, pokemonImg]
    return pokemonList
};
getData('pikachu')

const createList = (pokemonName, pokemonImg) => {
    const my_img = document.createElement('img')
    my_img.src = pokemonImg
    my_img.className = 'card-img-top'
    my_img.style = 'width:200px; border:2px; border-style:solid; border-color:black;'
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', my_img)
    const my_name = document.createElement('h4')
    my_name.innerHTML = pokemonName
    my_name.className = 'card-title'
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', my_name)
};

// this function will be called on click
const loadData = async () => {
    const myInput = document.querySelector('input').value // there is only one input on the page, otherwise, we would have to be specific
    
    const myList = await getData(myInput); // originally, there was no parameter for getData, but now we are passing in the myInput because we are using information from the page
    
    createList(myList[0], myList[1]) // like .map function, .forEach() loops through each element
    // we are sending it into the createList function
};


const clearData = () => {
    document.querySelector('section').innerHTML=''
};

// function to clear the data
// select my clear data button
const clear = document.getElementsByClassName('btn-danger')[0]
// add an event listener to that button
clear.addEventListener('click', clearData) // waiting for a click event, and the action is to function clearData

