package AccesModifyer.accessmodifiers2;

import AccesModifyer.accessmodifiers1.Student;

public class StudentChild extends Student {
    public StudentChild() {
    }

    void doSomething() {
        this.email = "naman@scaler.com";
    }
}

