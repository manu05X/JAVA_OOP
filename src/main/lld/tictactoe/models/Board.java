package main.lld.tictactoe.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.*;

//@AllArgsConstructor
@Getter
public class Board {
    private int size;
    private List<List<BoardCell>> cells = new ArrayList<>();

    public Board(int size){
        this.size = size;
        this.cells = initialiseCells(size);
    }

    private List<List<BoardCell>> initialiseCells(int size) {
        //From int 3 -> [], [], []
        //              [], [], []
        //              [], [], []
        /*
        Use a nested for loop 0->3
        for(i = 0->3)
            for(j=0->3)
        * */

        //Arrays.fill();
        //OR
        List<BoardCell> firstRow = Collections.nCopies(size,new BoardCell());
        //List<List<BoardCell>> rows = Collections.nCopies(size, firstRow);
        return  Collections.nCopies(size, firstRow);
    }
}
