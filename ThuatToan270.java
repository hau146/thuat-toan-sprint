import java.util.Scanner;

public class ThuatToan270 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Nhập vào số");
        int number = scanner.nextInt();

        int newNumber = 0;
        while (number != 0){
            int num = number % 10;
            newNumber = newNumber * 10 + num;
            number = number / 10;
        }
        System.out.println(newNumber);
        }
}
