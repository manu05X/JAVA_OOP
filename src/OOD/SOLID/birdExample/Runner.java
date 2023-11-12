package OOD.SOLID.birdExample;

import java.util.List;

public class Runner {
    public static void main(String[] args){
        Flyable parrot0 = new Parrot(10,"Brown","Medium","Sharp", BirdType.Parrot);
        Parrot parrot = new Parrot(11,"Brown","Medium","Sharp", BirdType.Parrot);
        Eagle eagle = new Eagle(20,"Brown","Medium","Sharp", BirdType.Eagle);


        flyAll(List.of(eagle,parrot,parrot0)); // making list of all flyable bird


        Swimmable penguin0 = new Penguin(20,"Brown","Medium","Sharp", BirdType.Penguin);
        penguin0.swim(); // this is correct here as refrence of obj is Swimmable
        //penguin0.makeSound() // this is wrong as refrence of obj is Swimmable
        ((Bird) penguin0).makeSound(); // this is correct way


        Bird penguin1 = new Penguin(20,"Brown","Medium","Sharp", BirdType.Penguin);
        penguin1.makeSound();//this is correct as refrence of obj is Bird
        //penguin.swim(); //this is wrong as refrence of obj is Bird
        ((Swimmable) penguin1).swim();


        Bird bird3 = new Penguin(20,"Brown","Medium","Sharp", BirdType.Penguin);
        bird3.makeSound();

    }
    //making method for creating list of obj for flyable bird
    private static void flyAll(List<Flyable> birds){
        birds.forEach(Flyable::fly);
    }
}
