import java.util.ArrayList;

public class ThuatToan255 {
    public static void checkDuplication(int[] number1, int[] number2){
        ArrayList<Integer> arrayList = new ArrayList<>();
        for (int i = 0; i < number1.length; i++) {
            for (int j = 0; j < number2.length; j++) {
                if(number1[i] == number2[j]){
                    arrayList.add(number1[i]);
                }
            }
        }
        System.out.println(arrayList);

    }

    public static void main(String[] args) {
        int[] num1 = {1,2,3,4,5};
        int[] num2 = {1,4,5};
        checkDuplication(num1,num2);
    }
}
