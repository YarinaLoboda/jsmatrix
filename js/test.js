const medals = [
    ['Country', 'Ukraine', 'Canada', 'USA'],
    ['Hockey', 1, 10, 6],
    ['Football', 5, 2, 1],
    ['Volleyball', 3, 4, 2],
     ['Tenis',11,,13],
];


function reverseArr(straightArr) {
    let reversedArr = [];
    // построковый for
    for (let i = 0; i < straightArr.length; ++i) {
        // for по колонкам
        for (let j = 0; j < straightArr[i].length; ++j) {
            //если нет ряда в перевернутом массиве - создаем его
            if (reversedArr[j] === undefined) reversedArr[j] = [];

             if (straightArr[i][j] !== undefined) { reversedArr[j][i] = straightArr[i][j]; }
             else {
                 // чтобы в табличку не попадало undefined заменим его на '-'
                 reversedArr[j][i] = '-';
             }  
        }
    }
    return reversedArr;
}



function showTable(arr) {

    for (const raw of arr) {
        let tableLine = '';
        for (const column of raw) {
            tableLine += ' ' + String(column).padStart(10, ' ');
        }
        console.log(tableLine);
     }

    return;
}

showTable(reverseArr(medals));