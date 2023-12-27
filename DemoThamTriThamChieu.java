import java.util.Arrays;

public class DemoThamTriThamChieu {
    static int thamTri(int a){
        a = 20;
        return a;
    }
    static String thamChieu(String[] numberArr){
        numberArr[0] = "codegym";
        return Arrays.toString(numberArr);
    }
    public static void main(String[] args) {
        //Tham trị là khi ta truyền vào hàm 1 kiểu giá trị nguyên thủy
        //thì giá trị này không bị ảnh hương và thay đổi
        //chỉ có giá trị trong hàm là thay đổi
        //tất cả kdl nguyên thủy đều được truyền bằng kiểu tham trị
        //VD
        int a = 10;
        System.out.println(a); //10 giá trị truyền vào
        System.out.println(thamTri(a)); //20 giá trị trong hàm

        //Trong tham chiếu khi truyền vào 1 kiểu đối tượng
        //thì bất kì thay đổi nào trong hàm đều ảnh hưởng đến giá trị được truyền vào
        //tất cả các kdl đối tượng đều được truyền bằng kiểu tham chiếu
        //VD
        String[] strArr = {"danang", "hue", "quangnam"};
        System.out.println(Arrays.toString(strArr)); //"danang", "hue", "quangnam" giá trị khi chưa truyền vào
        System.out.println(thamChieu(strArr)); //"codedgym", "hue", "quangnam" giá trị thay đổi trong hàm
        System.out.println(Arrays.toString(strArr)); //"codedgym", "hue", "quangnam" giá trị ban đầu đã bị thay đổi
    }
}
