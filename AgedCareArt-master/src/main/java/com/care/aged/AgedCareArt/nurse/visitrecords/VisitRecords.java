package com.care.aged.AgedCareArt.nurse.visitrecords;

import com.care.aged.AgedCareArt.nurse.records.Records;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class VisitRecords {


    private List<Records> records = createList();

    @RequestMapping(value = "/records", method = RequestMethod.GET, produces = "application/json")
    public List<Records> secondPage() {
        return records;
    }


    private static List<Records> createList() {
        List<Records> tempRecordClass = new ArrayList<>();
        Records record1 = new Records();
        record1.setClientId("1");
        record1.setApptDate("20/02/2019");
        record1.setApptTime("14:00");
        record1.setClientName("Sam");
        record1.setAddress("14-Lorne-St");
        record1.setCondition("Swollen-foot");
        record1.setRecommendation("See-the-Doctor");
        tempRecordClass.add(record1);
        return tempRecordClass;
    }

}
