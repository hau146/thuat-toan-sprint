import java.util.HashSet;
import java.util.Set;

public class ThuatToan289 {
    public static void main(String[] args) {
        int[] numberArr = {1,1,2,2,3,3}; //output 1,2,3

        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < numberArr.length; i++) {
            set.add(numberArr[i]);
        }
        System.out.println(set);
    }
}
