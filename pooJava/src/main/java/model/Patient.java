package model;

public class Patient extends User {
    private String birthday, boold;
    private double weight, height;
    public Patient(String name, String email){
        super(name,email);

    }



    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getBoold() {
        return boold;
    }

    public void setBoold(String boold) {
        this.boold = boold;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    @Override
    public String toString() {
    return super.toString() +"\nage :"+birthday+ "\n weight: "+ getWeight()+ "\n height:"+getWeight();
    }

    @Override
    public void showDataUser() {
        System.out.println("esta enefermo");
    }
}
