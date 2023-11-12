package OOD.SOLID.birdExample;

public class Parrot extends Bird implements Flyable {
    private FlyingBehaviour flyingBehaviour;
    public Parrot(Integer weight, String colour, String size, String beakType, BirdType type, FlyingBehaviour flyingBehaviour) {
        super(weight, colour, size, beakType, type);
        this.flyingBehaviour = flyingBehaviour;
    }
    @Override
    public void fly(){
        //System.out.println(this.getType() + " is Flying");
        flyingBehaviour.makeFly();
    }
    @Override
    public void makeSound(){
        //TODO Auto-generated method stub
    }
}
