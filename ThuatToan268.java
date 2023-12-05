public class ThuatToan268 {
    public static void reverseNumber(int number){
        int newNumber = 0;
        while (number != 0){
            int digit = number % 10;
            newNumber = newNumber * 10 + digit;
            number = number / 10;
        }
        System.out.println(newNumber);
    }

    public static void main(String[] args) {
        int number = 12345;
        reverseNumber(number);
    }
}
