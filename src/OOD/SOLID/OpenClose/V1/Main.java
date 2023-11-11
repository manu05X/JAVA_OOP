package OOD.SOLID.OpenClose.V1;


public class Main {
    public static void main(String[] args) {
        // Create boxes and cones
        Box box1 = new Box(3.0, 4.0, 5.0);
        Box box2 = new Box(2.0, 3.0, 4.0);
        Cone cone1 = new Cone(2.0, 4.0);

        // Create a volume calculator
        BoxVolumeCalculator volumeCalculator = new BoxVolumeCalculator();

        // Add shapes to the calculator
        volumeCalculator.addShape(box1);
        volumeCalculator.addShape(box2);
        volumeCalculator.addShape(cone1);

        // Calculate the total volume of all shapes
        double totalVolume = volumeCalculator.calculateTotalVolume();

        // Print the result
        System.out.println("Total Volume of Shapes: " + totalVolume);
    }
}
/*
In this example:

        The Cone class represents a cone with dimensions radius and height. It has a calculateVolume() method to compute the volume.

        The BoxVolumeCalculator class is modified to handle a list of objects (shapes) where each shape can be either a Box or a Cone. The calculateTotalVolume() method checks the type of each shape and calculates its volume accordingly.

        The Main class demonstrates creating instances of both Box and Cone, adding them to the calculator, and calculating the total volume.

        This design allows you to easily add more shapes in the future without modifying the existing classes. It adheres to the Open/Closed Principle, allowing the system to be open for extension and closed for modification.

*/



