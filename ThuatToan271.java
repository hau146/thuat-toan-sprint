import java.util.ArrayList;
import java.util.List;

public class ThuatToan271 {
    public static void checkFibonacci(){
        List<Integer> list = new ArrayList<>();
        int count = 0;
        int count2 = 1;
        int sum = 0;
        while (true){
            sum = count + count2;
            if (sum > 100){
                break;
            }
            list.add(sum);
            count2 = count;
            count = sum;

        }
        System.out.println(list);
    }

    public static void main(String[] args) {
        checkFibonacci();
    }
}
