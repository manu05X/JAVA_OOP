package OOD.SOLID.birdExample;

import OOD.SOLID.bird.*;

public class Runner {
    public static void main(String[] args){
        Bird bird = new Bird(20,"Brown","Medium","Sharp", "Eagle");
        bird.fly();
        Bird bird2 = new Bird(20,"Brown","Medium","Sharp", "Penguin");
        bird2.fly();
        Bird bird3 = new Bird(20,"Brown","Medium","Sharp", "Crow");
        bird3.fly();
    }
}
