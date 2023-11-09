package OOD.SOLID.bird;

public class Runner {
    public static void main(String[] args){
        Bird eagle = new Eagle(20,"Brown","Medium","Sharp",BirdType.Eagle);
        eagle.fly();

        Bird parrot = new Parrot(10,"Green","Medium","Sharp",BirdType.Parrot);
        parrot.fly();
    }
}
