function errorMessage(errorParameter){
    if (errorParameter === "unsolvableInput"){

    }
}

function allPosibilities(){
    
    function countValues(){
        let counter = 0;
        for (let i=0; i<=8; i++)
            for (let j=0; j<=8; j++){
                if (allPosibilitiesSudoku[i][j] !== 0 && !(Array.isArray(allPosibilitiesSudoku[i][j])))
                    counter++;
            }
        return counter;
    }

    function backToZero(){
        for (let i=0; i<=8; i++)
            for (let j=0; j<=8; j++){
                if (Array.isArray(allPosibilitiesSudoku[i][j]))
                    allPosibilitiesSudoku[i][j] = 0;
            }
    }

    backToZero();
    countValuesBefore = countValues();

    for (let i=0; i<=8; i++)
        for (let j=0; j<=8; j++){

            if (allPosibilitiesSudoku[i][j] !== 0)
                continue;

            else{
                let currentPosiblities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                for (let k=0; k<=8; k++){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][k]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][k]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[k][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[k][j]);
                }

                if (i % 3 === 0 && j % 3 === 0){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j+2]);
                }
                
                else if (i % 3 === 0 && j % 3 === 1){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j+1]);
                }

                else if (i % 3 === 0 && j % 3 === 2){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+2][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+2][j+2]);
                }

                else if (i % 3 === 1 && j % 3 === 0){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+2]);
                }

                else if (i % 3 === 1 && j % 3 === 1){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j+1]);
                }

                else if (i % 3 === 1 && j % 3 === 2){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i+1][j]);
                }
                
                else if (i % 3 === 2 && j % 3 === 0){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j+2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+2]);
                }

                else if (i % 3 === 2 && j % 3 === 1){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j+1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j+1]);
                }

                else if (i % 3 === 2 && j % 3 === 2){
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-2][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j-1]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i-1][j]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-2]);
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][j-1]);
                }

                if (currentPosiblities.length === 1)
                    allPosibilitiesSudoku[i][j] = currentPosiblities[0];
                else if (currentPosiblities === 0)
                    errorMessage("unsolvableInput");
                else
                    allPosibilitiesSudoku[i][j] = currentPosiblities;
            }

        }
    countValuesAfter = countValues();

    if (countValuesBefore === countValuesAfter)
        allPosibilities();
}

function checkValidance(sudoku){

    for(let i=0; i<=8; i++)
        for(let j=0; j<=7; j++)
            for(let k=j+1; k<=8; k++)
                if ((sudoku[i][j] === sudoku[i][k] && sudoku[i][j] !== 0 && !(Array.isArray(sudoku[i][j])) || (sudoku[j][i] === sudoku[k][i] && sudoku !== 0 && !(Array.isArray(sudoku[j][i])))))
                    return false;

    for(let i=0; i<=6; i+=3)
        for(let j=0; j<=6; j+=3){
        
        let currentValues = [];

        if (sudoku[i][j] !== 0 && !(Array.isArray(sudoku[i][j])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i][j+1] !== 0 && !(Array.isArray(sudoku[i][j+1])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i][j+2] !== 0 && !(Array.isArray(sudoku[i][j+2])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i+1][j] !== 0 && !(Array.isArray(sudoku[i+1][j])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i+1][j+1] !== 0 && !(Array.isArray(sudoku[i+1][j+1])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i+1][j+2] !== 0 && !(Array.isArray(sudoku[i+1][j+2])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i+2][j] !== 0 && !(Array.isArray(sudoku[i+2][j])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i+2][j+1] !== 0 && !(Array.isArray(sudoku[i+2][j+1])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i+2][j+2] !== 0 && !(Array.isArray(sudoku[i+2][j+2])))
            currentValues.push(sudoku[i][j]);
        
        if (Set(currentValues).size !== currentValues.length)
            return false;
        }
    return true;
}

function solveSudoku(sudoku, indexI=0, indexJ=0){
    
    function checkCompletance(sudokuParameter){
        for (let i=0; i<=8; i++){
            for (let j=0; j<=8; j++)
                if (sudokuParameter[i][j] === 0)
                    return false;
            return true;
        }
    }

    if (indexI === 9){
        if (checkValidance(sudoku) && checkCompletance(sudoku))
            sudokuSolutions.push(sudoku);
        return
    }

    nextI = (indexI + 1) ? (index === 8) : indexI;
    nextJ = 0 ? (indexJ === 8) : (indexJ + 1);

    if (!(Array.isArray(sudoku[i][j])))
        return solveSudoku(sudoku, nextI, nextJ);

    originalValues = sudoku[indexI][indexJ];
    for(let i=0; i<originalValues.length; i++){
        sudoku[indexI][indexJ] = originalValues[i];
        if (checkValidance(sudoku))
            if (solveSudoku(sudoku, nextI, nextJ))
                return;
    }

    sudoku[indexI][indexJ] = originalValues;
}

function create2DArray(){
    let returnSudoku = [];
    let currentRow = [];
    let inputFromHTML = document.querySelectorAll(".valueInput");

    for (let i=0; i<inputFromHTML.length; i++){
        currentRow.push(Number(inputFromHTML[i].value));
        if ( (i+1)%9==0 ){
            returnSudoku.push(currentRow);
            currentRow = [];
        }
    }
    return returnSudoku;
}

function showSolutions(){
    
    initialSudoku = create2DArray();
    allPosibilitiesSudoku = initialSudoku;
    sudokuSolutions = [];

    allPosibilities();
    solveSudoku(allPosibilities);
    for (let i=0; i<sudokuSolutions.length; i++)
        console.log(sudokuSolutions[i]);
}

let initialSudoku;
let sudokuSolutions;
let allPosibilitiesSudoku;