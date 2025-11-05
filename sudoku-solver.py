import time
import copy

    #firstSudokuTest
# initialSudoku = [[4, 0, 0, 3, 0, 8, 0, 0, 6],   
#                  [0, 0, 0, 0, 0, 0, 3, 0, 0],
#                  [0, 9, 0, 0, 0, 0, 8, 1, 0],
#                  [1, 0, 2, 0, 5, 0, 6, 4, 0],
#                  [0, 0, 0, 0, 6, 0, 0, 0, 0],
#                  [0, 3, 4, 0, 7, 0, 9, 0, 5],
#                  [0, 1, 7, 0, 0, 0, 0, 2, 0],
#                  [0, 0, 9, 0, 0, 0, 0, 0, 0],
#                  [5, 0, 0, 2, 0, 7, 0, 0, 1]]

    #secondSudokuTest
initialSudoku = [[0, 0, 0, 1, 8, 0, 6, 0, 0],
                 [0, 0, 7, 9, 0, 0, 0, 0, 2],
                 [0, 6, 1, 0, 0, 0, 0, 3, 0],
                 [9, 1, 0, 0, 0, 0, 0, 2, 0],
                 [8, 0, 0, 5, 0, 0, 3, 0, 4],
                 [0, 0, 3, 0, 0, 0, 0, 5, 7],
                 [0, 0, 2, 0, 0, 0, 0, 5, 8],
                 [6, 0, 0, 0, 0, 9, 7, 0, 0],
                 [0, 0, 8, 0, 5, 2, 0, 0, 0]]

allPosibilitiesSudoku = copy.deepcopy(initialSudoku)

def errorMessage(context):
    pass

# This function prints out to the console the sudoku parameter
#    prints out the grid of the 9x9 in a red outline and also the grid of the 3x3 boxes
def showSudoku(sudoku):
    
    print("\033[31m─────────────────────────────────────────────────────────────────────────\033[0m")
    print("\033[31m│\033[0m       |       |       \033[31m|\033[0m       |       |       \033[31m|\033[0m       |       |       \033[31m│\033[0m")
    for i in range(0, 9):
        for j in range(0, 9):
            if j == 0:
                print("\033[31m│   \033[0m", end="")
            elif j == 3 or j == 6:
                print("\033[31m   |   \033[0m", end="")
            else:
                print("   |   ", end="")
            if sudoku[i][j] == 0:
                print(end=" ")
            else:
                print(sudoku[i][j], end="")
        print("\033[31m   │\033[0m")
        print("\033[31m│\033[0m       |       |       \033[31m|\033[0m       |       |       \033[31m|\033[0m       |       |       \033[31m│\033[0m")
        if i==2 or i==5 or i==8:
            print("\033[31m─────────────────────────────────────────────────────────────────────────\033[0m")
        else:
            print("─────────────────────────────────────────────────────────────────────────")
        if i!=8:
            print("\033[31m│\033[0m       |       |       \033[31m|\033[0m       |       |       \033[31m|\033[0m       |       |       \033[31m│\033[0m")

# Defining a 3D variable within a function
#   the initial values that were given will remain with the same values
#   the values indicated with 0 values, or the empty values will get a List of possible values 
#   this function is made for a faster algorithm
def allPosibilities():
    global allPosibilitiesSudoku
    
    # Counts the values that aren't equal to empty fields or 0 in the list allPosibilitiesSudoku
    #   this function is meant afterwards to check if the number changes, if it does we will call the function recurssively
    def countValues():
        counter = 0
        for i in range (0, 9):
            for j in range (0, 9):
                # Checks if the current value is not 0 or is not a list, and we assure it's an actual value
                if allPosibilitiesSudoku[i][j] != 0 and not isinstance(allPosibilitiesSudoku[i][j], list):
                    counter += 1
        return counter

    numberOfValuesBefore = countValues()

    for i in range (0, 9):      # Going through all rows
        for j in range (0, 9):  # Going through all columns
            
            # The initial values will be the same
            if allPosibilitiesSudoku[i][j] != 0:
                continue
            
            # We will change the 0 value into something more optimal
            else:
                currentPosibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9] # Initializing all possible values so we have a faster algorithm      

                # Removes all the values in the same row
                for k in range(0, 9):                                        
                    if allPosibilitiesSudoku[i][k] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][k])
                
                # Removes all the values in the same column
                for k in range(0, 9):
                    if allPosibilitiesSudoku[k][j] in currentPosibilities: 
                        currentPosibilities.remove(allPosibilitiesSudoku[k][j])

                # Removes all the values in the same 3x3 cell
                if i % 3 == 0 and j % 3 == 0:
                    if allPosibilitiesSudoku[i][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+1])
                    if allPosibilitiesSudoku[i][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+2])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])
                    if allPosibilitiesSudoku[i+1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+1])
                    if allPosibilitiesSudoku[i+1][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+2])
                    if allPosibilitiesSudoku[i+2][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+2][j])
                    if allPosibilitiesSudoku[i+2][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+2][j+1])
                    if allPosibilitiesSudoku[i+2][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+2][j+2])
                
                elif i % 3 == 0 and j % 3 == 1:
                    if allPosibilitiesSudoku[i][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-1])
                    if allPosibilitiesSudoku[i][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+1])
                    if allPosibilitiesSudoku[i+1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-1])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])
                    if allPosibilitiesSudoku[i+1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+1])
                    if allPosibilitiesSudoku[i+1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-1])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])
                    if allPosibilitiesSudoku[i+1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+1])

                elif i % 3 == 0 and j % 3 == 2:
                    if allPosibilitiesSudoku[i][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-2])
                    if allPosibilitiesSudoku[i][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-1])
                    if allPosibilitiesSudoku[i+1][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-2])
                    if allPosibilitiesSudoku[i+1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-1])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])
                    if allPosibilitiesSudoku[i+1][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+2][j-2])
                    if allPosibilitiesSudoku[i+1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+2][j-1])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+2][j])
                
                elif i % 3 == 1 and j % 3 == 0:
                    if allPosibilitiesSudoku[i-1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j])
                    if allPosibilitiesSudoku[i-1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j+1])
                    if allPosibilitiesSudoku[i-1][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j+2])
                    if allPosibilitiesSudoku[i][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+1])
                    if allPosibilitiesSudoku[i][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+2])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])
                    if allPosibilitiesSudoku[i+1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+1])
                    if allPosibilitiesSudoku[i+1][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+2])
                
                elif i % 3 == 1 and j % 3 == 1:
                    if allPosibilitiesSudoku[i-1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j-1])
                    if allPosibilitiesSudoku[i-1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j])
                    if allPosibilitiesSudoku[i-1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j+1])
                    if allPosibilitiesSudoku[i][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-1])
                    if allPosibilitiesSudoku[i][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+1])
                    if allPosibilitiesSudoku[i+1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-1])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])
                    if allPosibilitiesSudoku[i+1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j+1])

                elif i % 3 == 1 and j % 3 == 2:
                    if allPosibilitiesSudoku[i-1][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j-2])
                    if allPosibilitiesSudoku[i-1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j-1])
                    if allPosibilitiesSudoku[i-1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j])
                    if allPosibilitiesSudoku[i][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-2])
                    if allPosibilitiesSudoku[i][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-1])
                    if allPosibilitiesSudoku[i+1][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-2])
                    if allPosibilitiesSudoku[i+1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j-1])
                    if allPosibilitiesSudoku[i+1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i+1][j])

                elif i % 3 == 2 and j % 3 == 0:
                    if allPosibilitiesSudoku[i-2][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j])
                    if allPosibilitiesSudoku[i-2][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j+1])
                    if allPosibilitiesSudoku[i-2][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j+2])
                    if allPosibilitiesSudoku[i-1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j])
                    if allPosibilitiesSudoku[i-1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j+1])
                    if allPosibilitiesSudoku[i-1][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j+2])
                    if allPosibilitiesSudoku[i][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+1])
                    if allPosibilitiesSudoku[i][j+2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+2])

                elif i % 3 == 2 and j % 3 == 1:
                    if allPosibilitiesSudoku[i-2][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j-1])
                    if allPosibilitiesSudoku[i-2][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j])
                    if allPosibilitiesSudoku[i-2][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j+1])
                    if allPosibilitiesSudoku[i-1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j-1])
                    if allPosibilitiesSudoku[i-1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j])
                    if allPosibilitiesSudoku[i-1][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j+1])
                    if allPosibilitiesSudoku[i][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-1])
                    if allPosibilitiesSudoku[i][j+1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j+1])

                elif i % 3 == 2 and j % 3 == 2:
                    if allPosibilitiesSudoku[i-2][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j-2])
                    if allPosibilitiesSudoku[i-2][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j-1])
                    if allPosibilitiesSudoku[i-2][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-2][j])
                    if allPosibilitiesSudoku[i-1][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j-2])
                    if allPosibilitiesSudoku[i-1][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j-1])
                    if allPosibilitiesSudoku[i-1][j] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i-1][j])
                    if allPosibilitiesSudoku[i][j-2] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-2])
                    if allPosibilitiesSudoku[i][j-1] in currentPosibilities:
                        currentPosibilities.remove(allPosibilitiesSudoku[i][j-1])                   
                    
                if len(currentPosibilities) == 1:
                    allPosibilitiesSudoku[i][j] = currentPosibilities[0]
                elif len(currentPosibilities) == 0:
                    errorMessage("unsolvableInput")
                else: 
                    allPosibilitiesSudoku[i][j] = currentPosibilities
                
    numberOfValuesAfter = countValues()

    # Recurssively calling the function again if the number of actual values changes
    if (numberOfValuesBefore != numberOfValuesAfter):
        allPosibilities()

if __name__ == '__main__':
    showSudoku(initialSudoku)
    allPosibilities()
    print(allPosibilitiesSudoku)
