
const container = document.querySelector(".container");

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [],
        i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}


const cubes = document.querySelectorAll(".cube");
let matrixOfCubes = [];
matrixOfCubes = listToMatrix(cubes, 4);



let currentGame = [];

arrays = listToMatrix(shuffle(), 3);
for (let i = 0; i < matrixOfCubes.length; i++) {
    for (let j = 0; j < matrixOfCubes[0].length - 1; j++) {
        matrixOfCubes[i][j].innerText = arrays[i][j];
        matrixOfCubes[i][j].style.backgroundColor = selectColor(parseInt(matrixOfCubes[i][j].innerText));
    }
    matrixOfCubes[i][3].innerText = 0;
    matrixOfCubes[i][3].style.backgroundColor = selectColor(parseInt(matrixOfCubes[i][3].innerText));
}


newGame.addEventListener('click', function() {
    arrays = listToMatrix(shuffle(), 3);
    for (let i = 0; i < matrixOfCubes.length; i++) {
        for (let j = 0; j < matrixOfCubes[0].length - 1; j++) {
            matrixOfCubes[i][j].innerText = arrays[i][j];
            matrixOfCubes[i][j].style.backgroundColor = selectColor(parseInt(matrixOfCubes[i][j].innerText));
        }
        matrixOfCubes[i][3].innerText = 0;
        matrixOfCubes[i][3].style.backgroundColor = selectColor(parseInt(matrixOfCubes[i][3].innerText));
    }
    for (let cube of cubes) {
        cube.classList.remove("animate__animated", "animate__tada", "animate__faster", "animate__headShake");
    }
    moves = 0;
    count = 0;
})

restart.addEventListener('click', function() {
    for (let i = 0; i < matrixOfCubes.length; i++) {
        for (let j = 0; j < matrixOfCubes[0].length - 1; j++) {
            matrixOfCubes[i][j].innerText = arrays[i][j];
            matrixOfCubes[i][j].style.backgroundColor = selectColor(parseInt(matrixOfCubes[i][j].innerText));
        }

        matrixOfCubes[i][3].innerText = 0;
        matrixOfCubes[i][3].style.backgroundColor = selectColor(parseInt(matrixOfCubes[i][3].innerText));
    }
    for (let cube of cubes) {
        cube.classList.remove("animate__animated", "animate__tada", "animate__faster", "animate__headShake");

    }
    moves = 0;
    count = 0;
})

//Randomize  upto 3 different color in the first 3 colums
function shuffle() {
    let array = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function selectColor(color) {
    switch (color) {
        case 0:
            return 'transparent';
        case 1:
            return 'firebrick';
        case 2:
            return 'lightgreen';
        case 3:
            return 'lightyellow';
        default:
            return 0;
    }
}

let twoColorsID = [];
let moves = 0;

//Should push the cubeID to twoColorsID and do an action based on twoColorsID.lenght
container.addEventListener('click', function(e) {
    for (let cube of cubes) {
        cube.classList.remove("animate__animated", "animate__pulse", "animate__faster");
        cube.classList.remove("animate__animated", "animate__headShake");
    }
    if (e.target.className === 'cube')
        switch (twoColorsID.length) {
            case 0:
            case null:
                twoColorsID.push(e.target.getAttribute('id'));
                console.log('First pushed');
                e.target.classList.add("cube_pushed");
                break;
            case 1:

                document.getElementById(twoColorsID[0]).classList.remove("cube_pushed");
                twoColorsID.push(e.target.getAttribute('id'));
                console.log('Second pushed');
                if (crawl(Number(twoColorsID[0].split('')[0]), Number(twoColorsID[0].split('')[1])) === true && crawl(Number(twoColorsID[1].split('')[0]), Number(twoColorsID[1].split('')[1]))) {
                    swapCubes();
                    moves = moves + 1;
                }
                if (gameWon() == true) {
                    matrixOfCubes[Number(twoColorsID[0].split('')[0])][Number(twoColorsID[0].split('')[1])].classList.remove("animate__animated", "animate__pulse", "animate__faster");
                    matrixOfCubes[Number(twoColorsID[1].split('')[0])][Number(twoColorsID[1].split('')[1])].classList.remove("animate__animated", "animate__pulse", "animate__faster");
                    for (let cube of cubes) {
                        cube.classList.add("animate__animated", "animate__tada");
                    }

                }

                twoColorsID.pop();
                twoColorsID.pop();
                break;
            default:
                console.log('selection not working');
        }
})

function swapCubes() {
    tempColor = document.getElementById(twoColorsID[1]).style.backgroundColor;
    tempNumber = document.getElementById(twoColorsID[1]).innerText;
    if (document.getElementById(twoColorsID[0]).style.backgroundColor != 'transparent') {
        document.getElementById(twoColorsID[1]).style.backgroundColor = document.getElementById(twoColorsID[0]).style.backgroundColor;
        document.getElementById(twoColorsID[1]).innerText = document.getElementById(twoColorsID[0]).innerText;
        document.getElementById(twoColorsID[0]).style.backgroundColor = tempColor;
        document.getElementById(twoColorsID[0]).innerText = tempNumber;
        console.log('Swap sucess');
    } else if (document.getElementById(twoColorsID[1]).style.backgroundColor == 'transparent') {
        matrixOfCubes[Number(twoColorsID[0].split('')[0])][Number(twoColorsID[0].split('')[1])].classList.add("animate__animated", "animate__headShake");
        matrixOfCubes[Number(twoColorsID[1].split('')[0])][Number(twoColorsID[1].split('')[1])].classList.add("animate__animated", "animate__headShake");
    } else {
        console.log('Cant change to transparent');
    }
}

function crawl(row, colum) {
    if (row === 0) {
        matrixOfCubes[Number(twoColorsID[0].split('')[0])][Number(twoColorsID[0].split('')[1])].classList.add("animate__animated", "animate__pulse", "animate__faster");
        matrixOfCubes[Number(twoColorsID[1].split('')[0])][Number(twoColorsID[1].split('')[1])].classList.add("animate__animated", "animate__pulse", "animate__faster");
        return true;
    }
    if (matrixOfCubes[row - 1][colum].style.backgroundColor !== 'transparent') {
        matrixOfCubes[row][colum].classList.add("animate__animated", "animate__headShake");
        return false;
    }
    return crawl(row - 1, colum);
}

function gameWon() {
    let counter = 0;;
    let winninColor;
    for (let i = 0; i < matrixOfCubes[0].length; i++) {
        winninColor = matrixOfCubes[1][i].style.backgroundColor;
        if (matrixOfCubes[0][i].style.backgroundColor === winninColor && matrixOfCubes[1][i].style.backgroundColor === winninColor && matrixOfCubes[2][i].style.backgroundColor === winninColor) {
            counter = counter + 1;;
        }
    }
    if (counter == 4)
        return true;
  else
      return false
}