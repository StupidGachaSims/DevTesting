let userSelectedPack = "bs";
let userOwnedCards = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
];
let userCardValues = [
    [0, 0, 0, 0]
];
let userIncome = 0;
let userBalance = 200;
const baseSetCards = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 96],
    [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 91, 92, 93, 94, 95],
    [97, 98, 99, 100, 101, 102]
];

window.onload = function() {
    const pack = document.getElementById("selectedPack");
    pack.addEventListener("click", openPack);
    generateOwnedCards();
}

function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max-min) + min);
}

function openPack() {
    let openedCards = document.getElementById("openedCards");
    while (openedCards.firstChild) {
        openedCards.firstChild.remove();
    }

    let localSetCards = []
    if (userSelectedPack == "bs") {
        localSetCards = baseSetCards
    }
    for (let i = 0; i < 11; i++) {
        let cardLi = document.createElement("li");
        cardLi.classList.add("pokemon-card");

        let cardImg = document.createElement("img");
        cardImg.id = "card" + i;

        let rarity = 0;
        let num = 0;
        if (i == 0) {
            rarity = 3;
            num = randomNumber(0, localSetCards[rarity].length) - 1;
            userOwnedCards[0][rarity][num] += 1;
            updateOwnedCard(0, rarity, num);
        }
        else if (i < 7) {
            rarity = 2;
            num = randomNumber(0, localSetCards[rarity].length) - 1;
            userOwnedCards[0][rarity][num] += 1;
            updateOwnedCard(0, rarity, num);
        }
        else if (i < 10) {
            rarity = 1;
            num = randomNumber(0, localSetCards[rarity].length) - 1;
            userOwnedCards[0][rarity][num] += 1;
            updateOwnedCard(0, rarity, num);
        }
        else {
            rarity = 0;
            num = randomNumber(0, localSetCards[rarity].length) - 1;
            userOwnedCards[0][rarity][num] += 1;
            updateOwnedCard(0, rarity, num);
        }

        cardImg.src = "./assets/pokemon/sets/bs/cards/" + localSetCards[rarity][num] + ".jpg";

        cardLi.appendChild(cardImg);
        document.getElementById("openedCards").appendChild(cardLi);
    }
}

function generateOwnedCards() {
    let ownedCards = document.getElementById("ownedCards");
    while (ownedCards.firstChild) {
        ownedCards.firstChild.remove()
    }

    for (let i = 0; i < 32; i++) {
        let cardLi = document.createElement("li");
        cardLi.id = "bsRare" + (i);
        cardLi.classList.add("pokemon-card");
        if (userOwnedCards[0][0][i] >= 1) {
            cardLi.classList.add("owned-card");
        }
        else {
            cardLi.classList.add("unowned-card");
        }

        let cardImg = document.createElement("img");
        cardImg.src = "./assets/pokemon/sets/bs/cards/" + baseSetCards[0][i] + ".jpg";

        cardLi.appendChild(cardImg);
        document.getElementById("ownedCards").appendChild(cardLi);
    }

    for (let i = 0; i < 32; i++) {
        let cardLi = document.createElement("li");
        cardLi.id = "bsUncommon" + (i);
        cardLi.classList.add("pokemon-card");
        if (userOwnedCards[0][1][i] >= 1) {
            cardLi.classList.add("owned-card");
        }
        else {
            cardLi.classList.add("unowned-card");
        }

        let cardImg = document.createElement("img");
        cardImg.src = "./assets/pokemon/sets/bs/cards/" + baseSetCards[1][i] + ".jpg";

        cardLi.appendChild(cardImg);
        document.getElementById("ownedCards").appendChild(cardLi);
    }

    for (let i = 0; i < 32; i++) {
        let cardLi = document.createElement("li");
        cardLi.id = "bsCommon" + (i);
        cardLi.classList.add("pokemon-card");
        if (userOwnedCards[0][2][i] >= 1) {
            cardLi.classList.add("owned-card");
        }
        else {
            cardLi.classList.add("unowned-card");
        }

        let cardImg = document.createElement("img");
        cardImg.src = "./assets/pokemon/sets/bs/cards/" + baseSetCards[2][i] + ".jpg";

        cardLi.appendChild(cardImg);
        document.getElementById("ownedCards").appendChild(cardLi);
    }

    for (let i = 0; i < 6; i++) {
        let cardLi = document.createElement("li");
        cardLi.id = "bsEnergy" + (i);
        cardLi.classList.add("pokemon-card");
        if (userOwnedCards[0][3][i] >= 1) {
            cardLi.classList.add("owned-card");
        }
        else {
            cardLi.classList.add("unowned-card");
        }

        let cardImg = document.createElement("img");
        cardImg.src = "./assets/pokemon/sets/bs/cards/" + baseSetCards[3][i] + ".jpg";

        cardLi.appendChild(cardImg);
        document.getElementById("ownedCards").appendChild(cardLi);
    }
}

function updateOwnedCard(pack, rarity, card) {
    let actualPack = "";
    let actualRarity = "";
    if (pack == 0) {
        actualPack = "bs";
    }
    if (rarity == 0) {
        actualRarity = "Rare";
    } else if (rarity == 1) {
        actualRarity = "Uncommon";
    } else if (rarity == 2) {
        actualRarity = "Common";
    } else {
        actualRarity = "Energy";
    }
    let cardLi = document.getElementById((actualPack + actualRarity + card));
    let cardAmount = userOwnedCards[pack][rarity][card];
    if (cardAmount >= 1) {
        cardLi.classList.remove("unowned-card");
    }
}