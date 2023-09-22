package Classes.GenericClass.Subclass;

import Classes.GenericClass.Example2.Print;

public class Main {
    public Main() {
    }

    public static void main(String[] args) {
        ColorPrintGeneric<String> colorPrint = new ColorPrintGeneric();
        colorPrint.setPrintValue("2");
        ColorPrint objColorPrint = new ColorPrint();
        objColorPrint.setPrintValue("2");
        new Print();
    }
}
