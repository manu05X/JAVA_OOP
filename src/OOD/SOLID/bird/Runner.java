package OOD.SOLID.bird;

public class Runner {
    public static void main(String[] args){
        FlyableBird eagle = new Eagle(20,"Brown","Medium","Sharp",BirdType.Eagle);
        eagle.fly();

        FlyableBird parrot = new Parrot(10,"Green","Medium","Sharp",BirdType.Parrot);
        parrot.fly();

        NonFlyableBird penguin = new Penguin(10,"Black","Large","Blunt",BirdType.Penguin);
        penguin.makeSound();
    }
}
