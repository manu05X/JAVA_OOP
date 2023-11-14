package test.OOD.DesignPattern.SingeltonPattern;

import main.OOD.DesignPattern.SingletonPattern.ConnectionPool;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ConnectionTest {
    @Test
    public void testSingleInstance(){
        ConnectionPool connectionPool1 = ConnectionPool.getInstance();
        ConnectionPool connectionPool2 = ConnectionPool.getInstance();

        //assertEquals("If a new instance is created, it should be the same as the older one",connectionPool1,connectionPool2);
        //assertEquals("If a new instance is created, it should be the same as the older one", connectionPool1,connectionPool2);
        assertTrue(connectionPool1==connectionPool2,"If a new instance is created, it should be the same as the older one");
    }
}
