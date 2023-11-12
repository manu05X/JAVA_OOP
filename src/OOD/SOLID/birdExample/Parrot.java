package OOD.SOLID.birdExample;

public class Parrot extends Bird implements Flyable{
    public Parrot(Integer weight, String colour, String size, String beakType, BirdType type) {
        super(weight, colour, size, beakType, type);
    }
    @Override
    public void fly(){

        System.out.println(this.getType() + " is Flying");
    }
    @Override
    public void makeSound(){
        //TODO Auto-generated method stub
    }
}
