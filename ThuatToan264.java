import java.util.Arrays;

public class ThuatToan264 {
    static void sortStr(String str){
        String[] arr = str.split("");
        Arrays.sort(arr);
        for (String s : arr) {
            System.out.println(s);
        }
    }

    public static void main(String[] args) {
        String str = "abc";
        sortStr(str);
    }
}
