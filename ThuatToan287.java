public class ThuatToan287 {
    public static void main(String[] args) {
        int[] numberArr = {1, 2, 3, 4}; //tìm số 3
        int num = 0;
        for (int i = 0; i < numberArr.length; i++) {
            if (numberArr[i] == 3) {
                num = numberArr[i];
                break;
            }
        }
        System.out.println(num);
    }
}
