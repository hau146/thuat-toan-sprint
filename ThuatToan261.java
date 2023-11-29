import java.util.ArrayList;
import java.util.Arrays;

public class ThuatToan261 {
    public static void totalPrimeNumber(int[] arr){
        int count = 0;
        int sum = 0;
        ArrayList<Integer> arrayList = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            for (int j = 1; j <= arr[i]; j++) {
                if (arr[i] % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
               arrayList.add(arr[i]);
            }
            count = 0;
        }

        for (int num : arrayList) {
            sum += num;
        }
        System.out.println(arrayList);
        System.out.println(sum);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        totalPrimeNumber(arr);
    }
}
