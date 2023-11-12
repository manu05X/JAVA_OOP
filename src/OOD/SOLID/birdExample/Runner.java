package OOD.SOLID.birdExample;

import OOD.SOLID.bird.*;

public class Runner {
    public static void main(String[] args){
        Bird parrot = new Parrot(20,"Brown","Medium","Sharp", BirdType.Parrot);
        parrot.fly();
        Bird eagle = new Eagle(20,"Brown","Medium","Sharp", BirdType.Eagle);
        eagle.fly();
        Bird bird3 = new Penguin(20,"Brown","Medium","Sharp", BirdType.Penguin);
        bird3.fly();
//        Bird crow = new Bird(20,"Brown","Medium","Sharp", BirdType.CROW);
//        crow.fly();
    }
}
