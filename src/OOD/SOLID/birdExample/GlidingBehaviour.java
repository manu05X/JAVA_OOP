package OOD.SOLID.birdExample;

import OOD.SOLID.birdExample.Interface.FlyingBehaviour;

public class GlidingBehaviour implements FlyingBehaviour {
    @Override
    public void makeFly() {
        System.out.println("Gliding");
    }

}