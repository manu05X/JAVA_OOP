package OOD.SOLID.bird;

public class Bird {
    private Integer weight;
    private String color;
    private String size;
    private String beakType;
    private BirdType type;

    public void fly(){
        if (type == BirdType.Eagle){
            System.out.println("Eagle is Flying");
        } else if(type == BirdType.Penguin){
            System.out.println("Penguin is swimming");
        }else if(type == BirdType.Parrot){
            System.out.println("Parrot is Flying");
        }
    }

}
