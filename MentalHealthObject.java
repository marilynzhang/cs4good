import java.util.ArrayList;
import java.util.StringTokenizer;

public class MentalHealthObject {
	
	private String line;
	private int occurences;
	ArrayList<String> keyWords = new ArrayList<String>();
	
	public MentalHealthObject(String fileLine) {
		line = fileLine;
		occurences = 0;
		loadKeyWords(line);
	}
	
	public boolean containKeyWords(String inputWord) {
		while (!Character.isLetter(inputWord.charAt(inputWord.length() - 1))) {
			inputWord = inputWord.substring(0, inputWord.length() - 1);
		}
		if (keyWords.contains(inputWord)) {
			return true;
		}
		return false;
	}
	
	public String getOutputLine() {
		int index = line.indexOf(":") ;
		return line.substring(0, index);
	}
	
	public String toString() {
		return line;
	}
	
	public void incrementOccurence() {
		occurences++;
	}
	
	public int getOccurences() {
		return occurences;
	}
	
	private void loadKeyWords(String line) {
		int index = line.indexOf(":") + 1;
		line = line.substring(index);
		StringTokenizer tokenizer = new StringTokenizer(line," ");
		while(tokenizer.hasMoreTokens()) {
			keyWords.add(tokenizer.nextToken().toLowerCase());
		}
	}
}
