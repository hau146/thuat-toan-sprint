public class ThuatToan281 {
    public static void swapNumber(int a, int b){
        a = a + b;
        b = a - b;
        a = a- b;
        System.out.println("biến a = " + a + " biến b = " + b);
    }

    public static void main(String[] args) {
        swapNumber(27, 43);
    }
}
