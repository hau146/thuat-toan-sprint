package demoOCA2;

import demoOCA1.Acc;

public class Test extends Acc {
    public static void main(String[] args) {
        Acc obj = new Test();
    }
    //Class Test chỉ kế thừa được thuộc tính s của class Acc
    //Thuộc tính r mang tính chất kế thừa nhưng chỉ xảy
    //ra tại thời điểm biên dịch vì class Test đang khởi tạo trực
    //tiếp lớp a
    //Thuộc tính s được class Acc kế thừa lại bởi vì phạm vi truy
    //cập của nó public
    //thuộc tính p là default nên chỉ xảy ra trong 1 package
    //thuộc tính q là prative nên chỉ xảy ra trong 1 class
    //Khi runtime chỉ có thuộc tính s được kế thừa
}
