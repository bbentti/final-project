import {portiaNPC} from './portiaNPC.js'

//Create New Array
function npcTileFront(npcs) {
    const npcTileFrontArr = [];

    npcs.forEach((npc) => {
        let npcFrontObj = {
            name: `${npc.name}`,
            firstLetter: `${npc.first_letter}`,
            birthday: `${npc.birthday}`,
            gender: `${npc.gender}`,
            occupation: `${npc.occupation}`,
            height: `${npc.height}`,
            weight: `${npc.weight}`,
            bio: `${npc.bio}`,
            imgURL: `${npc.img}`
        }
        
        npcTileFrontArr.push(npcFrontObj);
    })

    return npcTileFrontArr;
};

const finalFront = npcTileFront(portiaNPC);

console.log(finalFront);

//Helper Functions
//Function to Select
function selectElement(selectString) {
    return document.querySelector(selectString)
};
//Function to Create
function createElement(createString) {
    return document.createElement(createString)
};
//Function to Append
function appendElement(baseElement, appendString) {
    baseElement.append(appendString)
};
//Create Text Node
function textNode(textString) {
    return document.createTextNode(textString)
};

//Function to Append Child
function appendChild(baseElement, appendString) {
    baseElement.appendChild(appendString)
};

//Individual Tiles
const frontTileGrid = selectElement('.npcTileFront');

function renderFrontTile(npcs) {
    npcs.forEach((npc) => {
        let npcTileFront = createElement('div');
        let imgURL = createElement('img');
        imgURL.setAttribute('src', npc.imgURL);
        appendElement(npcTileFront, imgURL);
        let name = createElement('h1');
        let nameTxt = textNode(`${npc.name}`);
        appendElement(name, nameTxt);
        appendElement(npcTileFront, name);
        let birthday = createElement('h2');
        let birthdayTxt = textNode(`Birthday: ${npc.birthday}`);
        appendElement(birthday, birthdayTxt);
        appendElement(npcTileFront, birthday);
        let occupation = createElement('h3');
        let occupationTxt = textNode(`Occupation: ${npc.occupation}`);
        appendElement(occupation, occupationTxt);
        appendElement(npcTileFront, occupation);
        let height = createElement('h3');
        let heightTxt = textNode(`Height: ${npc.height}`);
        appendElement(height, heightTxt);
        appendElement(npcTileFront, height);
        let weight = createElement('h3');
        let weightTxt = textNode(`Weight: ${npc.weight}`);
        appendElement(weight, weightTxt);
        appendElement(npcTileFront, weight);
        let bio = createElement('p');
        let bioTxt = textNode(`${npc.bio}`);
        appendElement(bio, bioTxt);
        appendElement(npcTileFront, bio);
        appendChild(frontTileGrid, npcTileFront);
    })
}

renderFrontTile(finalFront);

//Filter by Gender - Male
const npcMaleArr = finalFront.filter((npc) => {
    return npc.gender === 'Male'
});

const npcMaleArrButton = selectElement('.onlyMale');

npcMaleArrButton.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcMaleArr)
});

//Filter by Gender - Female
const npcFemaleArr = finalFront.filter((npc) => {
    return npc.gender === 'Female'
});

const npcFemaleArrButton = selectElement('.onlyFemale');

npcFemaleArrButton.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcFemaleArr)
})

//Filter by Gender - All
const npcAllArrButton = selectElement('.allGender');

npcAllArrButton.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(finalFront)
})

//Filter by First Letter - A
const npcAArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'A'
});

const npcAArrButt = selectElement('.aButt');

npcAArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcAArr);
})

//Filter by First Letter - D
const npcDArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'D'
});

const npcDArrButt = selectElement('.dButt');

npcDArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcDArr);
})

//Filter by First Letter - E
const npcEArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'E'
});

const npcEArrButt = selectElement('.eButt');

npcEArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcEArr);
});

//Filter by First Letter - G
const npcGArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'G'
});

const npcGArrButt = selectElement('.gButt');

npcGArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcGArr);
});

//Filter by First Letter - L
const npcLArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'L'
});

const npcLArrButt = selectElement('.lButt');

npcLArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcLArr);
});

//Filter by First Letter - M
const npcMArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'M'
});

const npcMArrButt = selectElement('.mButt');

npcMArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcMArr);
});

//Filter by First Letter - N
const npcNArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'N'
});

const npcNArrButt = selectElement('.nButt');

npcNArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcNArr);
});

//Filter by First Letter - O
const npcOArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'O'
});

const npcOArrButt = selectElement('.oButt');

npcOArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcOArr);
});

//Filter by First Letter - P
const npcPArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'P'
});

const npcPArrButt = selectElement('.pButt');

npcPArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcPArr);
});

//Filter by First Letter - Q
const npcQArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'Q'
});

const npcQArrButt = selectElement('.qButt');

npcQArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcQArr);
});

//Filter by First Letter - R
const npcRArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'R'
});

const npcRArrButt = selectElement('.rButt');

npcRArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcRArr);
});

//Filter by First Letter - S
const npcSArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'S'
});

const npcSArrButt = selectElement('.sButt');

npcSArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcSArr);
});

//Filter by First Letter - T
const npcTArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'T'
});

const npcTArrButt = selectElement('.tButt');

npcTArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcTArr);
});

//Filter by First Letter - W
const npcWArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'W'
});

const npcWArrButt = selectElement('.wButt');

npcWArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcWArr);
});

//Filter by First Letter - X
const npcXArr = finalFront.filter((npc) => {
    return npc.firstLetter === 'X'
});

const npcXArrButt = selectElement('.xButt');

npcXArrButt.addEventListener('click', function() {
    frontTileGrid.innerHTML = '';
    return renderFrontTile(npcXArr);
})