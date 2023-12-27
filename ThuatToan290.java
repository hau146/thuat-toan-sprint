import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ThuatToan290 {
    public static void main(String[] args) {
        int[] numberArr = {1,2,2,3,4,5,3};
        Set<Integer> set = new HashSet<>();
        List<Integer> list = new ArrayList<>();
        int count = 0;

        for (int i = 0; i < numberArr.length; i++) {
            if (set.add(numberArr[i])){
                list.add(numberArr[i]);
            }
        }

        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < numberArr.length; j++) {
                if(list.get(i) == numberArr[j]){
                    count++;
                }
            }
            if(count > 1){
                list.remove(i);
                i--;
            }
            count = 0;
        }

        System.out.println(list);
    }
}
