import time
import copy

# Functions to print/display error messages
def errorMessage(context):
    pass

def sudokuTestCase(testcase):
    sudoku = []
    line = []
    for i in testcase:
        if i == "\n":
            sudoku.append(line)
            line = []
        elif i != " ":
            line.append(int(i))
    sudoku.append(line)
    return sudoku

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
            if sudoku[i][j] == 0 or isinstance(sudoku[i][j], list):
                print(end=" ")
            elif sudoku[i][j] != initialSudoku[i][j]:
                print(f"\033[33m{sudoku[i][j]}\033[0m", end="")
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

# Check all the rules of sudoku to see if the sudoku is valid
#    Rule 1: every row shouldn't contain two or more occurences of the same number
#    Rule 2: every column shouldn't contain two or more occurences of the same number
#    Rule 3: every 3x3 grid shouldn't contain two or more occurences of the same number
def checkValidance(sudoku):
    for i in range(0, 9):
        for j in range(0, 8):
            for k in range(j+1, 9):
                if (sudoku[i][j] == sudoku[i][k] and sudoku[i][j] != 0 and not isinstance(sudoku[i][j], list)) or (sudoku[j][i] == sudoku[k][i] and sudoku[j][i] != 0 and not isinstance(sudoku[j][i], list)):
                    return False
    
    for i in range(0, 8, 3):
        for j in range(0, 8, 3):

            currentValues = []

            if sudoku[i][j]!=0 and not isinstance(sudoku[i][j], list):
                currentValues.append(sudoku[i][j])
            if sudoku[i][j+1]!=0 and not isinstance(sudoku[i][j+1], list):
                currentValues.append(sudoku[i][j+1])
            if sudoku[i][j+2]!=0 and not isinstance(sudoku[i][j+2], list):
                currentValues.append(sudoku[i][j+2])
            if sudoku[i+1][j]!=0 and not isinstance(sudoku[i+1][j], list):
                currentValues.append(sudoku[i+1][j])
            if sudoku[i+1][j+1]!=0 and not isinstance(sudoku[i+1][j+1], list):
                currentValues.append(sudoku[i+1][j+1])
            if sudoku[i+1][j+2]!=0 and not isinstance(sudoku[i+1][j+2], list):
                currentValues.append(sudoku[i+1][j+2])
            if sudoku[i+2][j]!=0 and not isinstance(sudoku[i+2][j], list):
                currentValues.append(sudoku[i+2][j])
            if sudoku[i+2][j+1]!=0 and not isinstance(sudoku[i+2][j+1], list):
                currentValues.append(sudoku[i+2][j+1])
            if sudoku[i+2][j+2]!=0 and not isinstance(sudoku[i+2][j+2], list):
                currentValues.append(sudoku[i+2][j+2])

            if len(currentValues)!=len(set(currentValues)): #Checks if the length of list changed after removing the duplicates
                return False
        
    return True

# The main function for solving the sudoku using backtracking
def solveSudoku(sudoku, indexI=0, indexJ=0):
    # print(f"At position ({indexI},{indexJ})") # Print for debugging
    def checkCompletance(sudokuParameter):
        for i in range(0, 9):
            for j in range(0, 9):
                if sudokuParameter[i][j] == 0:
                    return False
        return True
    
    if indexI == 9:
        if checkValidance(sudoku) and checkCompletance(sudoku):
            sudokuSolutions.append(copy.deepcopy(sudoku))
        return True

    nextI = (indexI + 1) if (indexJ == 8) else indexI
    nextJ = 0 if (indexJ==8) else indexJ + 1

    # If the current number in sudoku is a value that won't change we proceed to next index
    if not isinstance(sudoku[indexI][indexJ], list):
        return solveSudoku(sudoku, nextI, nextJ)
    
    # Here should be the recursive algorithm
    originalValues = sudoku[indexI][indexJ]
    for i in originalValues:
        sudoku[indexI][indexJ] = i
        if checkValidance(sudoku):
            if solveSudoku(sudoku, nextI, nextJ):
                return True
        
    sudoku[indexI][indexJ] = originalValues # Backtracking to the original values
    return False

# Function main()   
if __name__ == '__main__':


    # The sudoku test is read from a specified file in the fileInformation variable
    fileInformation = open("Sudoku-Tests/sudoku4.txt", "r")
    information = fileInformation.read()
    initialSudoku = sudokuTestCase(information)
    
    # We optimize the solutions so we can backtrack faster and not waste any time on unnecesary itterations of a function
    allPosibilitiesSudoku = copy.deepcopy(initialSudoku)
    sudokuSolutions = []

    # Show initial sudoku in a console interface
    showSudoku(initialSudoku)
    allPosibilities()

    # Solve the sudoku then print in a console interface the solution
    solveSudoku(allPosibilitiesSudoku)
    # print(sudokuSolutions) # Debugging print statement
    showSudoku(sudokuSolutions)