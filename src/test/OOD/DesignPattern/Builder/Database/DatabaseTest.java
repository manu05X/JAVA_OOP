package test.OOD.DesignPattern.Builder.Database;

import main.OOD.DesignPattern.Builder.Database.Database;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
public class DatabaseTest {
    @Test
    public void testDatabaseBuilder(){
        //Database.Builder builder = Database.builder();
        //Nice way of creating Objects
        Database database =
                Database.builder()
                    .mysql()
                    .port(8001)
                    .name("rescale")
                    .withCredential("Groot","pass")
                    .compressed()
                    .build();
        //Here we cannot use setter method thus database is now immutable
        //so below will not work as ->The builder class is mutable , but tha database class is immutable
//        database.name = "NAme";
//        database.setName("Name");

/*
//        builder.setName("reScaler");
//        builder.setUserName("groot");
//        builder.setPassword("pass");

          builder
                  .setName("reScaler")
                  .withCredential("groot","pass")
                  //.setPassword("pass")
                  .setCompressed(true);
          */
    }
}
