

package test;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public Main() {
    }

    public static void main(String[] args) {
        Map<String, Integer> numbers = new HashMap();
        Map<Integer, Integer> hs = new HashMap();
        numbers.put("One", 1);
        numbers.put("Two", 2);
        numbers.put("Three", 3);
        System.out.println("Map: " + String.valueOf(numbers));
        System.out.println("Map Integer: " + String.valueOf(hs));
        System.out.println("Keys: " + String.valueOf(numbers.keySet()));
        System.out.println("Values: " + String.valueOf(numbers.values()));
        System.out.println("Entries: " + String.valueOf(numbers.entrySet()));
        int value = (Integer)numbers.remove("Two");
        System.out.println("Removed Value: " + value);
        System.out.println("Map: " + String.valueOf(numbers));
    }
}

