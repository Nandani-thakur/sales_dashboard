


const todaySalesData = {
    products: [
      { product: "Product A", category: "Category 1", quantitySold: 10, salesAmount: 200 },
      { product: "Product B", category: "Category 1", quantitySold: 5, salesAmount: 150 },
      { product: "Product C", category: "Category 2", quantitySold: 8, salesAmount: 300 },
      
    ],
    categories: [
      { category: "Category 1", salesAmount: 350 },
      { category: "Category 2", salesAmount: 300 },
      
    ]
  };
  
  
  const comparisonSalesData = {
    products: [
      { product: "Product A", category: "Category 1", date1SalesAmount: 180, date2SalesAmount: 200, difference: 20 },
      { product: "Product B", category: "Category 1", date1SalesAmount: 140, date2SalesAmount: 150, difference: 10 },
      { product: "Product C", category: "Category 2", date1SalesAmount: 280, date2SalesAmount: 300, difference: 20 },
      
    ],
    categories: [
      { category: "Category 1", date1SalesAmount: 320, date2SalesAmount: 350, difference: 30 },
      { category: "Category 2", date1SalesAmount: 290, date2SalesAmount: 300, difference: 10 },
    
    ]
  };
  
  // Function to simulate API call
  export const fetchSalesData = async () => {
    // Simulate a delay for API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return {
      today: todaySalesData,
      comparison: comparisonSalesData
    };
  };
  