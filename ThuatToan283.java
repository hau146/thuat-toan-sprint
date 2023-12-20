import java.util.Arrays;
import java.util.Optional;

public class ThuatToan283 {
    public static void main(String[] args) {
        int[] numberArr = {11,2,3,9,54};

        Optional<Integer> result = Arrays.stream(numberArr) //gán kết quả cho Optinal để tránh lỗi NullPointer
                .boxed() //chuyển từ int sang Stream<Integer> để làm việc với stream
                .distinct() //Loại bỏ p/tử trùng lặp
                .sorted((a,b) -> Integer.compare(b,a)) //sort giảm dần
                .skip(2) //bỏ 2 phần tử đầu tiên
                .findFirst(); //lấy lại phần tử đầu tiên sau khi đã loại bỏ kq = 9;

        System.out.println(result);
    }
}
