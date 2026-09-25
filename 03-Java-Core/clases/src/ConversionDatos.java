public class ConversionDatos {
    public static void main(String[] args) {
        double valorDouble2 = 756.456;
        float valorFloat2 = (float) valorDouble2;
        long valorLong2 = (long) valorDouble2;
        int valorInteger2 = (int) valorLong2;
        short valorShort2 = (short) valorInteger2;
        byte valorByte2 = (byte) valorShort2;

        System.out.println("Valor en double: " + valorDouble2);
        System.out.println("float: " + valorFloat2);
        System.out.println("long: " + valorLong2);
        System.out.println("int: " + valorInteger2);
        System.out.println("short: " + valorShort2);
        System.out.println("byte: " + valorByte2);

    }// main
}