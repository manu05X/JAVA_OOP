package OOD.SOLID.bird;

public class Penguin extends NonFlyableBird{
    public Penguin(Integer weight, String colour, String size, String beakType, BirdType type) {
        super(weight, colour, size, beakType, type);
    }
    @Override
    public void makeSound(){
        //
    }
}
