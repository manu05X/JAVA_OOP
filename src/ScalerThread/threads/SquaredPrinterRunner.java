package ScalerThread.threads;

import java.util.List;

public class SquaredPrinterRunner {

    public static void main(String[] args) {
        //Create a list of values
        //List.of(1,2,3,4,5) initializes arry/list very easly
        List<Integer> values = List.of(1,2,3,4,5);

        //Iterate over the list and create a thread
        for(Integer value:values){
            //obj of SquarePrinter class is created but refrance from Thread class
            Thread thread = new SquarePrinter(value);
            //Now Execute the thread
            thread.start();
        }
    }
}

//https://github.com/kanmaytacker/fundamentals/blob/2023/august/advanced/os/code/os/src/main/java/com/scaler/threads/Squared.java

/*
package ScalerThread.threads;

import java.util.List;

public class SquaredPrinterRunner {

    public static void main(String[] args) {
        //Create a list of values
        //List.of(1,2,3,4,5) initializes arry/list very easly
        List<Integer> values = List.of(1,2,3,4,5);

        //Iterate over the list and create a thread
        for(Integer value:values){
            //task i.e SquarePrinter obj is created
            SquarePrinter obj = new SquarePrinter(value);

            //obj of SquarePrinter is passed in thread class obj
            Thread thread = new Thread(obj);

            //Now Execute the thread
            thread.start();
        }
    }
}
*/