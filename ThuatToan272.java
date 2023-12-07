public class ThuatToan272 {
    public static void checkSnt(int number) {
        int count = 0;
        for (int i = 1; i <= number; i++) {
            if (number % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            System.out.println("Đây là số nguyên tố");
        } else {
            System.out.println("Đây không phải là số nguyên tố");
        }
    }

    public static void main(String[] args) {
        checkSnt(13);
    }
}
