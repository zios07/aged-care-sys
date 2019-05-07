package com.care.aged.AgedCareArt.nurse.appoints;

public class Appointments {

    private String apptNumber;
    private String apptDate;
    //@DateTimeFormat(iso= DateTimeFormat.ISO.DATE)
    //private LocalDate apptDate;
    private String apptTime;
    private String clientName;
    private String address;
    private String condition;

    public Appointments() {
    }


    public String getApptDate() {
        return apptDate;
    }

    public void setApptDate(String apptDate) {
        this.apptDate = apptDate;
    }


    public String getApptTime() {
        return apptTime;
    }


    public void setApptTime(String apptTime) {
        this.apptTime = apptTime;
    }


    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientName() {
        return clientName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getApptNumber() {
        return apptNumber;
    }

    public void setApptNumber(String apptNumber) {
        this.apptNumber = apptNumber;
    }
}