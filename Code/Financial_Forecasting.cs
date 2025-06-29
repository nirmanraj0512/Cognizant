using System;

class FinancialForecast
{
    // Recursively computes the future value
    public static decimal FutureValue(decimal presentValue, decimal rate, int periods)
    {
        if (periods == 0)
            return presentValue;

        return FutureValue(presentValue, rate, periods - 1) * (1 + rate);
    }

    public static void Main(string[] args)
    {
        decimal presentValue = 1000m;
        decimal rate = 0.05m;
        int periods = 20;

        decimal result = FutureValue(presentValue, rate, periods);
        Console.WriteLine($"Future Value after {periods} periods: {result:F2}");
    }
}
