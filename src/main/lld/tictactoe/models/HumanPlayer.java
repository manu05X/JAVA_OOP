package main.lld.tictactoe.models;

//Extrinsic state
public class HumanPlayer extends Player{
    private User user;
    public HumanPlayer(GameSymbol symbol, User user){
        super(symbol);
        this.user = user;
    }
}

/*
public class HumanPlayer extends Player {
    private String name;
    private String email;
    private String photo;

    public HumanPlayer(String name, String email, String photo) {
        this.name = name;
        this.email = email;
        this.photo = photo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public BoardCell play(Board board) {
        return null;
    }
}
*/
