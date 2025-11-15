function allPosibilities(){
    
    function countValues(){
        let counter = 0;
        for(let i=0; i<=8; i++)
            for(let j=0; j<=8; j++){
                if (allPosibilitiesSudoku[i][j] !== 0 && !(Array.isArray(allPosibilitiesSudoku[i][j])))
                    counter++;
            }
        return counter;
    }

    function backToZero(){
        for(let i=0; i<=8; i++)
            for(let j=0; j<=8; j++){
                if (Array.isArray(allPosibilitiesSudoku[i][j]))
                    allPosibilitiesSudoku[i][j] = 0;
            }
    }

    backToZero();
    countValuesBefore = countValues();

    for(let i=0; i<=8; i++)
        for(let j=0; j<=8; j++){

            if (allPosibilitiesSudoku[i][j] != 0)
                continue

            else{
                let currentPosiblities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                for(let k=0; k<=8; k++)
                    if (currentPosiblities.includes(allPosibilitiesSudoku[i][k]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[i][k])
                    if (currentPosiblities.includes(allPosibilitiesSudoku[k][j]))
                        currentPosiblities = currentPosiblities.filter(x => x !== allPosibilitiesSudoku[k][j])
            }

        }

}