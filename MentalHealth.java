
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.StringTokenizer;

public class MentalHealth {
	static Scanner scan = new Scanner(System.in);
	
	static ArrayList<MentalHealthObject> resources;
	
	public static void main (String[] args) {
		welcomeMessage();
		resources = new ArrayList<MentalHealthObject>();
		readFile();
		String message = inputMessage();
		readMessage(message);
		printResources();
		askForMoreResources();
	}
	
	//reads the keywords after the semicolons and adds it to an arrayList 
	private static void readFile() {
		try {
    		BufferedReader rd = new BufferedReader(new FileReader("mentalhealthdatabase.txt"));
    		while (true) {
    			String line = rd.readLine();
    			if (line == null) break;			
    			MentalHealthObject resource = new MentalHealthObject(line);
    			resources.add(resource);
    		}
    		rd.close();
    	} 
    	catch (IOException ex) {
    		System.out.println("Error has occured.");
    	}
	}
	
	private static void welcomeMessage() {
		System.out.println("Welcome to the Mental Health Database!");
		System.out.println("This database is designed to help match you or someone you concern for with the most suitable resource. ");
	}
	
	private static String inputMessage() {
		System.out.println("Please proceed to just write down your thoughts and struggles...");
		String message = scan.nextLine();
		return message;
	}
	
	private static void readMessage(String message) {
		StringTokenizer tokenizer = new StringTokenizer(message," ");
		while(tokenizer.hasMoreTokens()) {
			String word = tokenizer.nextToken();
			for(int i = 0; i < resources.size(); i++) {
				if(resources.get(i).containKeyWords(word.toLowerCase())) {
					resources.get(i).incrementOccurence();
				}
			}
		}
	}
	
	private static void printResources() {
		int maxValue = 0;
		int maxIndex = 0;
		for(int i = 0; i < resources.size(); i++) {
			if (resources.get(i).getOccurences() > maxValue) {
				maxValue = resources.get(i).getOccurences();
				maxIndex = i;
			}
		}
		
		if (maxValue != 0) {
			System.out.println("We think the following resource is most appicable based on your thoughts and struggles...");
			System.out.println(resources.get(maxIndex).getOutputLine());
			System.out.println(); //stylistic purposes
		}
	}
	
	private static void askForMoreResources() {
		System.out.println("Would you like to see more resources applicable to you? (Y/N)");
		String yesOrNo = scan.nextLine();
		System.out.println(); //stylistic purposes
		if (yesOrNo.equals("Y")) {
			for(int i = 0; i < resources.size(); i++) {
				if (resources.get(i).getOccurences() >= 1) {
					System.out.println(resources.get(i).getOutputLine());
				}
			}
			System.out.println("Thank you for utilizing our database. Please do not hesistate to reach out to any of these resources.");
		}
		else {
			System.out.println("Thank you for utilizing our database. Please do not hesistate to reach out to any of these resources.");
		}
	}
}
