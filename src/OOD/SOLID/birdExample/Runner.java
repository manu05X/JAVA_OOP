package OOD.SOLID.birdExample;

public class Runner {
    public static void main(String[] args){
        FlyingBird parrot = new Parrot(20,"Brown","Medium","Sharp", BirdType.Parrot);
        parrot.fly();
        FlyingBird eagle = new Eagle(20,"Brown","Medium","Sharp", BirdType.Eagle);
        eagle.fly();
        NonFlyingBird bird3 = new Penguin(20,"Brown","Medium","Sharp", BirdType.Penguin);
        bird3.makeSound();
    }
}
