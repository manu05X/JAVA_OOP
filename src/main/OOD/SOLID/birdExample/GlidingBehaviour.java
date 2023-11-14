package main.OOD.SOLID.birdExample;

import main.OOD.SOLID.birdExample.Interface.FlyingBehaviour;

public class GlidingBehaviour implements FlyingBehaviour {
    @Override
    public void makeFly() {
        System.out.println("Gliding");
    }

}