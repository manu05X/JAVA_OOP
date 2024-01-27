package main.lld.tictactoe.models;

//If we need attributes we make it abstract class else we make it an Interface
public abstract class Player {
    private GameSymbol symbol;
    public Player(GameSymbol symbol){
        this.symbol = symbol;
    }
}
