package Classes.GenericClass.Example2;

public class Main {
    public Main() {
    }

    public static void main(String[] args) {
        Print<Integer> printObj1 = new Print();
        printObj1.setPrintValue(1);
        Object printValue = printObj1.getPrintValue();
        if ((Integer)printValue == 1) {
        }

    }
}
