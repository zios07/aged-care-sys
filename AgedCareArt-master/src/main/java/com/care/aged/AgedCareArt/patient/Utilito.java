package com.care.aged.AgedCareArt.patient;

import java.util.Random;

public class Utilito {
public static String genUniqueID() {
	String hayStack="0a1AzbB2yCcDx3EwdFv4GueHt5IsfJZr6KqYgXLWp7VMUoThNSnO8mPilQ9Rkj";
	String niddle="";
	Random random=new Random();
	int idLength=9;
	String uniqueID="";
	for(int count=0; count<idLength; count++) {
		niddle=String.valueOf(hayStack.charAt(random.nextInt(hayStack.length())));
		uniqueID+=niddle;
	}
	return uniqueID;
}
}
