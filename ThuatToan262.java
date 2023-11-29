import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class ThuatToan262 {
    static void countChar(String str){
        Set<Character> uniqueChars = new HashSet<>();
        ArrayList arrayList = new ArrayList<>();
        ArrayList arrayList2 = new ArrayList<>();
        int count = 0;

        for (char c : str.toCharArray()) {
           if (uniqueChars.add(c)){
               arrayList.add(c);
           }
        }
        System.out.println(arrayList);

        for (int i = 0; i < arrayList.size() ; i++) {
            for (int j = 0; j < str.length(); j++) {
                if(arrayList.get(i).equals(str.charAt(j))){
                    count++;
                }
            }
            arrayList2.add(arrayList.get(i));
            arrayList2.add(count);
            count = 0;
        }
        System.out.println(arrayList2);
    }

    public static void main(String[] args) {
        countChar("aaabbbcc");
    }
}
