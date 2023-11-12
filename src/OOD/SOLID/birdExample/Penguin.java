package OOD.SOLID.birdExample;

public class Penguin extends Bird{
    public Penguin(Integer weight, String colour, String size, String beakType, BirdType type) {
        super(weight, colour, size, beakType, type);
    }
    @Override
    public void fly() {
        System.out.println("Cannot fly it swim");
    }
    // Here Penguine cannot fly it can swim so divide bird into flyable and nonFlyable category

}
