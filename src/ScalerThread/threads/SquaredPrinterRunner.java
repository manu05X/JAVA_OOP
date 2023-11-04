package ScalerThread.threads;

import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;


/*
5> newCachedThreadPool executor does not have upperlimit so it keep on creating threads benefit of using it is reuses them
 we uses it when we dont know how many thread we need

Create threads or reuse them
when a task comes in
if a thread is available, it will use it
if a thread is not available, it will create one

*/
public class SquaredPrinterRunner {

    public static void main(String[] args) {
        //Create a list of values
        //List.of(1,2,3,4,5) initializes array/list very easily
        List<Integer> values = List.of(1,2,3,4,5);

        //Here no upperlimit of thread exist, it keeps on creating thread
        Executor executor = Executors.newCachedThreadPool();

        System.out.println(Thread.currentThread().getName());
        //Iterate over the list and create a thread
        for(Integer value:values){
            //task i.e SquarePrinter obj is created and is instantiated with the value from the list.
            SquarePrinter obj = new SquarePrinter(value);

            executor.execute(obj);
            //This line submits the obj (a SquarePrinter object) for execution in the single-threaded executor service (executor).
        }
    }
}


/*
//4> FixedThreadPool executer have maximum upper limit of how many thread to be used
public class SquaredPrinterRunner {

    public static void main(String[] args) {
        //Create a list of values
        //List.of(1,2,3,4,5) initializes arry/list very easly
        List<Integer> values = List.of(1,2,3,4,5);

        //Here maximum of 3 thread can be used i.e max of 3 thread can be used
        Executor executor = Executors.newFixedThreadPool(3);

        System.out.println(Thread.currentThread().getName());
        //Iterate over the list and create a thread
        for(Integer value:values){
            //task i.e SquarePrinter obj is created and is instantiated with the value from the list.
            SquarePrinter obj = new SquarePrinter(value);

            executor.execute(obj);
            //This line submits the obj (a SquarePrinter object) for execution in the single-threaded executor service (executor).
        }
    }
}

/*

//3> executer
public class SquaredPrinterRunner {

    public static void main(String[] args) {
        //Create a list of values
        //List.of(1,2,3,4,5) initializes arry/list very easly
        List<Integer> values = List.of(1,2,3,4,5);
        Executor executor = Executors.newSingleThreadExecutor();
        //Here, you create an Executor object named executor. The Executors.newSingleThreadExecutor() method creates a new single-threaded executor service. This executor service can be used to execute tasks in a separate thread.

        System.out.println(Thread.currentThread().getName());
        //Iterate over the list and create a thread
        for(Integer value:values){
            //task i.e SquarePrinter obj is created and is instantiated with the value from the list.
            SquarePrinter obj = new SquarePrinter(value);

            executor.execute(obj);
            //This line submits the obj (a SquarePrinter object) for execution in the single-threaded executor service (executor).
        }
    }
}
*/
//Redis - uses hashMap - key->value - SingleThreadExecutor
// redis solve syncronization has to handle multiple thread so if multiple thread writes it causes inconsistence so internally it uses single-threaded executor to make the final change in the value of a key
// SingleThreadExecutor is useful when we want only one thread to modify something or do certain task

/*
//1> subthreading
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
*/
//https://github.com/kanmaytacker/fundamentals/blob/2023/august/advanced/os/code/os/src/main/java/com/scaler/threads/Squared.java

/*
//2> runable interface
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