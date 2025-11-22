function errorMessage(errorParameter){
    if (errorParameter === "unsolvableInput"){

    }
}

function allPosibilities(){
    
    function countValues(){
        let counter = 0;
        for (let i=0; i<=8; i++)
            for (let j=0; j<=8; j++){
                if (sudoku3D[i][j] !== 0 && !(Array.isArray(sudoku3D[i][j])))
                    counter++;
            }
        return counter;
    }

    function backToZero(){
        for (let i=0; i<=8; i++)
            for (let j=0; j<=8; j++){
                if (Array.isArray(sudoku3D[i][j]))
                    sudoku3D[i][j] = 0;
            }
    }

    backToZero();
    let countValuesBefore = countValues();

    for (let i=0; i<=8; i++)
        for (let j=0; j<=8; j++){

            if (sudoku3D[i][j] !== 0)
                continue;

            else{
                let currentPosiblities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                for (let k=0; k<=8; k++){
                    if (currentPosiblities.includes(sudoku3D[i][k]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][k]);
                    if (currentPosiblities.includes(sudoku3D[k][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[k][j]);
                }

                if (i % 3 === 0 && j % 3 === 0){
                    if (currentPosiblities.includes(sudoku3D[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+2]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j+2]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j+2]);
                }
                
                else if (i % 3 === 0 && j % 3 === 1){
                    if (currentPosiblities.includes(sudoku3D[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j+1]);
                }

                else if (i % 3 === 0 && j % 3 === 2){
                    if (currentPosiblities.includes(sudoku3D[i][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+2][j]);
                }

                else if (i % 3 === 1 && j % 3 === 0){
                    if (currentPosiblities.includes(sudoku3D[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j+2]);
                    if (currentPosiblities.includes(sudoku3D[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+2]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j+2]);
                }

                else if (i % 3 === 1 && j % 3 === 1){
                    if (currentPosiblities.includes(sudoku3D[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j+1]);
                }

                else if (i % 3 === 1 && j % 3 === 2){
                    if (currentPosiblities.includes(sudoku3D[i-1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j]);
                    if (currentPosiblities.includes(sudoku3D[i][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i+1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i+1][j]);
                }
                
                else if (i % 3 === 2 && j % 3 === 0){
                    if (currentPosiblities.includes(sudoku3D[i-2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j]);
                    if (currentPosiblities.includes(sudoku3D[i-2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i-2][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j+2]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j+2]);
                    if (currentPosiblities.includes(sudoku3D[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i][j+2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+2]);
                }

                else if (i % 3 === 2 && j % 3 === 1){
                    if (currentPosiblities.includes(sudoku3D[i-2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i-2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j]);
                    if (currentPosiblities.includes(sudoku3D[i-2][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j+1]);
                    if (currentPosiblities.includes(sudoku3D[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i][j+1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j+1]);
                }

                else if (i % 3 === 2 && j % 3 === 2){
                    if (currentPosiblities.includes(sudoku3D[i-2][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i-2][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i-2][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-2][j]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j-1]);
                    if (currentPosiblities.includes(sudoku3D[i-1][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i-1][j]);
                    if (currentPosiblities.includes(sudoku3D[i][j-2]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-2]);
                    if (currentPosiblities.includes(sudoku3D[i][j-1]))
                        currentPosiblities = currentPosiblities.filter(x => x !== sudoku3D[i][j-1]);
                }

                if (currentPosiblities.length === 1)
                    sudoku3D[i][j] = currentPosiblities[0];
                else if (currentPosiblities.length === 0)
                    errorMessage("unsolvableInput");
                else
                    sudoku3D[i][j] = currentPosiblities;
            }

        }
    let countValuesAfter = countValues();

    if (countValuesBefore !== countValuesAfter)
        allPosibilities();
}

function checkValidance(sudoku){

    for(let i=0; i<=8; i++)
        for(let j=0; j<=7; j++)
            for(let k=j+1; k<=8; k++)
                if ((sudoku[i][j] === sudoku[i][k] && sudoku[i][j] !== 0 && !(Array.isArray(sudoku[i][j]))) || (sudoku[j][i] === sudoku[k][i] && sudoku[j][i] !== 0 && !(Array.isArray(sudoku[j][i]))))
                    return false;

    for(let i=0; i<=6; i+=3)
        for(let j=0; j<=6; j+=3){
        
        let currentValues = [];

        if (sudoku[i][j] !== 0 && !(Array.isArray(sudoku[i][j])))
            currentValues.push(sudoku[i][j]);
        if (sudoku[i][j+1] !== 0 && !(Array.isArray(sudoku[i][j+1])))
            currentValues.push(sudoku[i][j+1]);
        if (sudoku[i][j+2] !== 0 && !(Array.isArray(sudoku[i][j+2])))
            currentValues.push(sudoku[i][j+2]);
        if (sudoku[i+1][j] !== 0 && !(Array.isArray(sudoku[i+1][j])))
            currentValues.push(sudoku[i+1][j]);
        if (sudoku[i+1][j+1] !== 0 && !(Array.isArray(sudoku[i+1][j+1])))
            currentValues.push(sudoku[i+1][j+1]);
        if (sudoku[i+1][j+2] !== 0 && !(Array.isArray(sudoku[i+1][j+2])))
            currentValues.push(sudoku[i+1][j+2]);
        if (sudoku[i+2][j] !== 0 && !(Array.isArray(sudoku[i+2][j])))
            currentValues.push(sudoku[i+2][j]);
        if (sudoku[i+2][j+1] !== 0 && !(Array.isArray(sudoku[i+2][j+1])))
            currentValues.push(sudoku[i+2][j+1]);
        if (sudoku[i+2][j+2] !== 0 && !(Array.isArray(sudoku[i+2][j+2])))
            currentValues.push(sudoku[i+2][j+2]);
        
        if (new Set(currentValues).size !== currentValues.length)
            return false;
        }
    return true;
}

function solveSudoku(sudoku, indexI=0, indexJ=0){
    
    if (stopRecursion)
        return;

    function checkCompletance(sudokuParameter){
        for (let i=0; i<=8; i++)
            for (let j=0; j<=8; j++)
                if (sudokuParameter[i][j] === 0)
                    return false;
        return true;    
    }

     if (checkCompletance && sudokuSolutions.length >= 10){
        stopRecursion = true;
        return;
     }

    if (indexI === 9){
        if (checkValidance(sudoku) && checkCompletance(sudoku))
            sudokuSolutions.push(sudoku);
        return
    }

    let nextI = (indexJ === 8) ? (indexI + 1) : indexI;
    let nextJ = (indexJ === 8) ? 0 : (indexJ + 1);

    if (!(Array.isArray(sudoku[indexI][indexJ])))
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

// Function for solve button, runs only when SOLVE button is pressed
function showSolutions(){
    
    initialSudoku = create2DArray();
    console.log(initialSudoku);
    console.log(checkValidance(initialSudoku));
    sudoku3D = initialSudoku.map(row => [...row]);
    sudokuSolutions = [];

    allPosibilities();
    solveSudoku(sudoku3D);
    for (let i=0; i<sudokuSolutions.length; i++)
        console.log(sudokuSolutions[i]);

    for(let index=0; index<sudokuSolutions.length; index++){
        let currentSudokuSolution = sudokuSolutions[index];

        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
            document.getElementById("input" + (i*9 + j + 1)).value = currentSudokuSolution[i][j].toString();
            if (currentSudokuSolution[i][j]!==initialSudoku[i][j])
                document.getElementById("input" + (i*9 + j + 1)).style.color = "#fffb00ff";
            }
        }
    }
}

let initialSudoku;
let sudokuSolutions;
let sudoku3D;
let stopRecursion = false;

// Function for reset button, runs only when RESET button is pressed
function resetTable(){
    for(let i=1; i<=81; i++){
        document.getElementById("input" + i).value = "";
        document.getElementById("input" + i).style.color = "#ffffffff"
    }
}

// Function not finished yet, because I don't have buttons to work with yet
function hideshowButtons(){
    if (sudokuSolutions.length == 0 || sudokuSolutions.length == 1){

    }
}