public class ThuatToan269 {
    public static void totalMinMax(int[] number){
        int max = number[0];
        int min = number[0];
        int total = 0;
        for (int i = 0; i < number.length; i++) {
            if (number[i] > max){
                max = number[i];
            }
            else if(number[i] < min){
                min = number[i];
            }
            total += number[i];
        }
        System.out.println(total - max);
        System.out.println(total - min);
    }

    public static void main(String[] args) {
        int[] arrNumber = {9,9,0,6,7};
        totalMinMax(arrNumber);
    }
}
