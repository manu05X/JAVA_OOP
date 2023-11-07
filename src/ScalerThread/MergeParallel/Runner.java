package ScalerThread.MergeParallel;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Runner {
    public static void main(String[] args) throws  Exception{
        List<Integer> values = List.of(10,9,8,7,1,2,3,4);

        ExecutorService executor = Executors.newCachedThreadPool();
        Sorter sorter = new Sorter(values,executor);

        Future<List<Integer>> sortedValue = executor.submit(sorter);
        System.out.println(sortedValue.get());
    }
}
