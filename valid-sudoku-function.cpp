//Leetcode Final Solution for Valid Sudoku in C++
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {

    // O(n3) approach for horizontal and vertical lines check in board
    for(int i=0; i<9; i++)
        for(int j=0; j<8; j++)
            for(int k=j+1; k<9; k++){
                if( (board[i][j] == board[i][k] && board[i][j]!='.') || (board[j][i] == board[k][i] && board[j][i]!='.') )
                    return false;
                    }

    for (int i=0; i<7; i+=3)          //goes from square to square 3x3
        for(int j=0; j<7; j+=3)      //goes from square to square 3x3
            if( ((board[i][j]!='.') && (board[i][j]==board[i][j+1] || board[i][j]==board[i][j+2] || board[i][j]==board[i+1][j] || board[i][j]==board[i+1][j+1] || board[i][j]==board[i+1][j+2] || board[i][j]==board[i+1][j+2] || board[i][j]==board[i+2][j] || board[i][j]==board[i+2][j+1] || board[i][j]==board[i+2][j+2])) || ((board[i][j+1]!='.') && (board[i][j+1]==board[i][j+2] || board[i][j+1]==board[i+1][j] || board[i][j+1]==board[i+1][j+1] || board[i][j+1]==board[i+1][j+2] || board[i][j+1]==board[i+1][j+2] || board[i][j+1]==board[i+2][j] || board[i][j+1]==board[i+2][j+1] || board[i][j+1]==board[i+2][j+2])) || ((board[i][j+2]!='.') && (board[i][j+2]==board[i+1][j] || board[i][j+2]==board[i+1][j+1] || board[i][j+2]==board[i+1][j+2] || board[i][j+2]==board[i+1][j+2] || board[i][j+2]==board[i+2][j] || board[i][j+2]==board[i+2][j+1] || board[i][j+2]==board[i+2][j+2])) || ((board[i+1][j]!='.') && (board[i+1][j]==board[i+1][j+1] || board[i+1][j]==board[i+1][j+2] || board[i+1][j]==board[i+1][j+2] || board[i+1][j]==board[i+2][j] || board[i+1][j]==board[i+2][j+1] || board[i+1][j]==board[i+2][j+2])) || ((board[i+1][j+1]!='.') && (board[i+1][j+1]==board[i+1][j+2] || board[i+1][j+1]==board[i+2][j] || board[i+1][j+1]==board[i+2][j+1] || board[i+1][j+1]==board[i+2][j+2])) || ((board[i+1][j+2]!='.') && (board[i+1][j+2]==board[i+2][j] || board[i+1][j+2]==board[i+2][j+1] || board[i+1][j+2]==board[i+2][j+2])) || ((board[i+2][j]!='.') && (board[i+2][j]==board[i+2][j+1] || board[i+2][j]==board[i+2][j+2])) || (board[i+2][j+1]!='.' && board[i+2][j+1]==board[i+2][j+2]) )
                return false;
    
    return true;

    }
};
