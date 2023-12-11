public class ThuatToan274 {
    public static int[] formatArrayToInt(String[] str) {
        int[] intArr = new int[str.length];

        for (int i = 0; i < intArr.length; i++) {
            intArr[i] = Integer.parseInt(str[i]);
        }
        return intArr;
    }

    public static void calculateTheSumOf2Chains(String str1, String str2) {
        int hours = 0;
        int tempHours = 0;
        int minute = 0;
        int tempMinute = 0;
        int second = 0;
        int tempSecond = 0;
        int[] arr1 = formatArrayToInt(str1.split(":"));
        int[] arr2 = formatArrayToInt(str2.split(":"));


        if (arr1[2] + arr2[2] > 60) {
            second = arr1[2] + arr2[2] - 60;
            tempSecond = 1;
        } else {
            second = arr1[2] + arr2[2];
        }

        if ((arr1[1] + arr2[1] + tempSecond) > 60){
            minute = (arr1[1] + arr2[1] + tempSecond) - 60;
            tempMinute = 1;
        } else {
            minute = arr1[1] + arr2[1] + tempSecond;
        }

        if ((arr1[0] + arr2[0] + tempMinute) > 24){
            System.out.println("Ngày mới");
        } else {
            hours = arr1[0] + arr2[0] + tempMinute;
            String result = hours + ":" + minute + ":" + second + "";
            System.out.println(result);
        }
    }

    public static void main(String[] args) {
        String str1 = "11:20:30";
        String str2 = "07:40:45";
        calculateTheSumOf2Chains(str1,str2);
    }
}
