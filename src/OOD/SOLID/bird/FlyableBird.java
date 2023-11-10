package OOD.SOLID.bird;

public abstract class FlyableBird extends Bird{
    public FlyableBird(Integer weight, String colour, String size, String beakType, BirdType type) {
        super(weight, colour, size, beakType, type);
    }

    public abstract void fly();
}
