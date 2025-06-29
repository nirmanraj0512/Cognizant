using System;

namespace EcommerceSearch
{
    // 1️⃣ Product Class
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(int id, string name, string category)
        {
            ProductId = id;
            ProductName = name;
            Category = category;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Sample products (unsorted array for linear search)
            Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Headphones", "Electronics"),
                new Product(103, "Smartphone", "Electronics"),
                new Product(104, "Watch", "Accessories")
            };
            
            // Products sorted by ProductId for Binary Search
            Product[] sortedProducts = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Headphones", "Electronics"),
                new Product(103, "Smartphone", "Electronics"),
                new Product(104, "Watch", "Accessories")
            };
            
            int targetId = 103;

            // Perform Linear and Binary Searches
            var linearResult = LinearSearch(products, targetId);
            var binaryResult = BinarySearch(sortedProducts, targetId);

            // Results
            Console.WriteLine(linearResult != null 
                ? $"[Linear Search] Found: {linearResult.ProductName}" 
                : "[Linear Search] Not Found");

            Console.WriteLine(binaryResult != null 
                ? $"[Binary Search] Found: {binaryResult.ProductName}" 
                : "[Binary Search] Not Found");

            /* 
                ===================================================
                Analysis:
                - Linear Search: O(n) worst-case, best-case O(1).
                - Binary Search: O(log n) worst-case and average.
                
                Recommendation:
                Use Binary Search if your data is sorted (and especially for large datasets), 
                as it drastically improves search performance. 
                Otherwise, use Linear Search for unsorted or very small datasets.
                ===================================================
            */
        }

        // Linear Search: O(n) worst-case
        public static Product LinearSearch(Product[] products, int targetId)
        {
            foreach (var product in products)
            {
                if (product.ProductId == targetId)
                    return product;
            }
            return null;
        }

        // Binary Search: O(log n) worst-case
        public static Product BinarySearch(Product[] sortedProducts, int targetId)
        {
            int left = 0;
            int right = sortedProducts.Length - 1;

            while (left <= right)
            {
                int mid = left + (right - left) / 2;

                if (sortedProducts[mid].ProductId == targetId)
                    return sortedProducts[mid];
                else if (sortedProducts[mid].ProductId < targetId)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }
    }
}
