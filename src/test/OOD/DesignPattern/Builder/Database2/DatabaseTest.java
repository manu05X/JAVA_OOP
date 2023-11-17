package test.OOD.DesignPattern.Builder.Database2;

import main.OOD.DesignPattern.Builder.Database2.Database;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import main.OOD.DesignPattern.Builder.Database2.DatabaseType;
import org.junit.jupiter.api.Test;

public class DatabaseTest {


    @Test
    public void testDatabaseBuilder() {
        Database database = Database.builder()
                .mysql()
                .withName("test")
                .withUrl("localhost", 8080)
                .build();



        assertNotNull(database, "If build method is called, database object should not be null");
        assertEquals("test", database.getClass(), "If name is set, on fetching it should be the same");
        assertEquals(DatabaseType.MYSQL, database.getType(), "If mysql is set, on fetching it should be the same");
    }
}