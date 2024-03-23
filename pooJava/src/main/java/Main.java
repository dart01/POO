import model.Doctor;
import model.Patient;
import model.User;

import java.util.Date;

public class Main {
    public static void main(String[] args){


        //declarando e instanciando el obj
         //model.Doctor myDoctor = new model.Doctor( "diego");
//         myDoctor.name= "pepito perez";
//         myDoctor.showName();
//         myDoctor.showId();
//         System.out.println(model.Doctor.id);
//
//         model.Doctor myDoctorAnn = new model.Doctor();
//         myDoctorAnn.showId();
//         System.out.println(model.Doctor.id);

         //ui.UIMenu.showMenu();



        Doctor myDoctor = new Doctor("diego", "neurologo");
        myDoctor.addAvailableAppointments(new Date(), "4pm");
        myDoctor.addAvailableAppointments(new Date(), "6pm");
        myDoctor.addAvailableAppointments(new Date(), "8pm");
        for (Doctor.AvailableAppointment aA: myDoctor.getAvailableAppointments()){
            System.out.println(aA.getDate()+""+ aA.getTime());
        }
//        System.out.println(myDoctor);
////        int a = 12;
////        int b = 0;
//         Patient patient = new Patient("alejandra", "alejandra@dsa");
//         System.out.println(patient);
            User user = new Doctor("diego","diego@adasda");
            user.showDataUser();
    }
}
