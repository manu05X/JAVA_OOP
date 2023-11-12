package OOD.SOLID.birdExample;

import OOD.SOLID.birdExample.Interface.FlyingBehaviour;

public class FlappingBehaviour implements FlyingBehaviour {
    @Override
    public void makeFly() {
        System.out.println("Flapping");
    }
}
