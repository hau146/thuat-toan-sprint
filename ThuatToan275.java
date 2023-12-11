public class ThuatToan275 {
    public static void totalInteger(int[] intArr, int number) {
        int num1 = 0;
        int num2 = 0;
        for (int i = 0; i < intArr.length; i++) {
            for (int j = 1; j < intArr.length; j++) {
                if (intArr[i] + intArr[j] == number){
                    num1 = intArr[i];
                    num2 = intArr[j];
                }
            }
        }
        System.out.println("2 số đó là " + num1 + ", " + num2);
    }

    public static void main(String[] args) {
        int[] intArr = {1,2,3,4,5,6,7};
        int number = 7;
        totalInteger(intArr, number);
    }
}
