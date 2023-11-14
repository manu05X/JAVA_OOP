package main.Constructor.Types.Chaining.Scaler;

public class D extends C {
    public int d;
    D() {
        super("hello");
        System.out.println("D");
    }

    D(String word) {
        super();
        b = 27;
        System.out.println("D - " + word);
    }
}
