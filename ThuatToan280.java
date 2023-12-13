public class ThuatToan280 {
    public static void symmetricalArray(int[] number){
        boolean flag = true;
        for (int i = 0; i < number.length; i++) {
            for (int j = number.length -(i+1); j >= 0 ; j--) {
                if(number[i] != number[j]){
                    flag = false;
                    break;
                }
                break;
            }
        }
        System.out.println(flag);
    }

    public static void main(String[] args) {
        int[] number = {3,3,2,3,1}; //false
        int[] number2 = {1,2,3,2,1}; //true
        symmetricalArray(number);
    }
}
