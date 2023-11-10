package OOD.SOLID.bird;

public abstract class Bird {
    private Integer weight;
    private String color;
    private String size;
    private String beakType;
    private BirdType type;

    public Bird(Integer weight, String colour, String size, String beakType, BirdType type) {
        this.weight = weight;
        this.color = colour;
        this.size = size;
        this.beakType = beakType;
        this.type = type;
    }

    public abstract void makeSound();

    //public abstract void fly();// move to its attribute class i.e flyable
}
/*
public void fly(){
        if (type == BirdType.Eagle){
            System.out.println("Eagle is Flying");
        } else if(type == BirdType.Penguin){
            System.out.println("Penguin is swimming");
        }else if(type == BirdType.Parrot){
            System.out.println("Parrot is Flying");
        }
    }
*/