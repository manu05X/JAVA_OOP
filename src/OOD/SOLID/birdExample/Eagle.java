package OOD.SOLID.birdExample;

public class Eagle extends FlyingBird{
    public Eagle(Integer weight, String colour, String size, String beakType, BirdType type) {
        super(weight, colour, size, beakType, type);
    }
    @Override
    public void fly(){

        System.out.println("\nEagle is Flying");
    }
    @Override
    public void makeSound(){
        //TODO Auto-generated method stub
    }
}
