import java.util.Scanner;

public class Sample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user for input
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Check age validity
        if (age < 0) {
            System.out.println("Invalid age entered.");
        } else {
            System.out.println("Your age is " + age);
        }

        scanner.close();
    }
}
