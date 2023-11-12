package OOD.SOLID.birdExample;
public class Bird {
    private Integer weight;
    private String color;
    private String size;
    private String beakType;
    private String type;

    public Bird(Integer weight, String colour, String size, String beakType, String type) {
        this.weight = weight;
        this.color = colour;
        this.size = size;
        this.beakType = beakType;
        this.type = type;
    }

    //public abstract void fly();// move to its attribute class i.e flyable
    public void fly() {
        if (type == "Eagle") {
            System.out.println("Eagle is Flying");
        } else if (type == "Penguin") {
            System.out.println("Penguin is swimming");
        } else if (type == "Parrot") {
            System.out.println("Parrot is Flying");
        }
        else {
            System.out.println(type + " is not present");
        }
    }
}
