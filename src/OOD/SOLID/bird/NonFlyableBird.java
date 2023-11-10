package OOD.SOLID.bird;

public abstract class NonFlyableBird extends Bird{
    public NonFlyableBird(Integer weight, String colour, String size, String beakType, BirdType type) {
        super(weight, colour, size, beakType, type);
    }
}
