package model;

import java.util.ArrayList;
import java.util.Date;

public class Doctor extends User {

    String speciality;
    public Doctor(String name, String email){
        super(name, email);
        System.out.println("el nombre del doctor es:"+ name );

        this.speciality = speciality;
    }
    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
//metodo constructor de la clase doctor



    //comportamientos
//    public void showName(){
//        System.out.println(name);
//    }


    ArrayList<AvailableAppointment> availableAppointments = new ArrayList<>();
        public void addAvailableAppointments(Date date, String time){
        availableAppointments.add(new Doctor.AvailableAppointment(date,time));
    }
    public ArrayList<AvailableAppointment> getAvailableAppointments(){

            return availableAppointments;
    }

    @Override
    public String toString() {
        return super.toString()+ "\n speciality:"+ speciality +"\n avaiable:" +availableAppointments.toString();
    }

    @Override
    public void showDataUser() {
        System.out.println("hospital: cruz roja");
    }

    public static class AvailableAppointment{
        private  int id;
        private Date date;
        private String time;

        public AvailableAppointment(Date date, String time) {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }
    }



}
