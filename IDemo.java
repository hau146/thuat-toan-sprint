public interface IDemo {
    static void total(){
        System.out.println(2+3);
    }
    default void total2(){
        System.out.println(10+10);
    }
}
