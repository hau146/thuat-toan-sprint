import java.util.*;

public class ThuatToan277 {
    public static void findTheSecondLargestNumber(int[] numberArr) {
        Arrays.sort(numberArr);
        System.out.println(Arrays.toString(numberArr));
        Map<Integer, Integer> integerMap = new HashMap<>();
        for (int n : numberArr) {
            integerMap.put(n, n);
        }
        System.out.println(integerMap.get(integerMap.size() - 1));
    }

    public static void main(String[] args) {
        int[] number = {3, 5, 4, 2, 3, 1};
        findTheSecondLargestNumber(number);
    }
}
