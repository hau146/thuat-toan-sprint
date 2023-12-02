import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;

public class ThuatToan256 {
    public static void chainProcessing(String str){
        Set<String> stringSet = new LinkedHashSet<>();
        ArrayList arrayList = new ArrayList<>();
        ArrayList arrayList2 = new ArrayList<>();
        String[] arrStr = str.split("");
        int count = 0;

        for (String s : arrStr) {
            if (stringSet.add(s)){
                arrayList.add(s);
            }
        }


        for (int i = 0; i < arrayList.size() ; i++) {
            for (int j = 0; j < str.length(); j++) {
                if(arrayList.get(i).equals(arrStr[j])){
                    count++;
                }
            }
            arrayList2.add(arrayList.get(i));
            arrayList2.add(count);
            count = 0;
        }

        System.out.println("Chuỗi sau khi loại bỏ trùng lặp " + arrayList.toString());
        System.out.println(arrayList2);
        for (int i = 0; i < arrayList2.size(); i++) {
            System.out.println("số lần xuất hiện của kí tự " + arrayList2.get(i) + " là " + arrayList2.get(i+1));
            i++;
        }
    }

    public static void main(String[] args) {
        String str = "aaabbbbcccc";
        chainProcessing(str);
    }
}
