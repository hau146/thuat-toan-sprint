import java.util.HashMap;
import java.util.Map;

public class ThuatToan276 {
    public static void convertString(String str){
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('M', 1000);
        //XV

        int num = 0;
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i); //X C I I
            int roman = map.get(c); //10 100 1 1
            if (roman >= num){
                roman -= num;
                num = roman;
            } else {
                num += roman;
            }
        }
        System.out.println(num);
    }

    public static void main(String[] args) {
        convertString("XCII");
    }
}
