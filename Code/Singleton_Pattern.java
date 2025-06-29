package Code;
class Logger {
    private static Logger instance;

    private Logger() { }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}

public class Singleton_Pattern {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        if(logger1 == logger2){
            System.out.println("Refer to Same Object"); // true
        }
        else{
            System.out.println("Do notRefer to Same Object"); // false
        }
        
    }
}
