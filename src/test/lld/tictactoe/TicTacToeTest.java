package test.lld.tictactoe;

import main.lld.tictactoe.models.Board;
import main.lld.tictactoe.models.Game;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TicTacToeTest {
    @Test
    public void testCreateGame(){

    }
    @Test
    public void testCreateBoard(){
        Board board = new Board(3);
        int rowSize = board.getCells().size();
        assertEquals(3,rowSize, "If constructor of board calles with n, it should return n rows");

//        int columnSize = board.getCells().get(0).size();
//        assertEquals(3,rowSize, "If constructor of board calles with n, it should return n columns");
    }
}
