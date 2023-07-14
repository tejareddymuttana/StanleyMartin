$(document).ready(function() {
  // Load JSON data from file or API endpoint
  // You can use AJAX or fetch API to load the data
  var jsonData = [
    { "ProductName": "Product A", "Price": 10.99 },
    { "ProductName": "Product B", "Price": 15.99 },
    { "ProductName": "Product C", "Price": 5.99 },
    { "ProductName": "Product D", "Price": 8.99 },
    { "ProductName": "Product E", "Price": 12.99 }
  ];

  // Handle form submission
  $("#searchForm").submit(function(event) {
    event.preventDefault(); // Prevent page refresh

    var searchQuery = $("#searchInput").val().trim().toLowerCase();

    if (searchQuery === "") {
      // Display validation error if no entry is made
      $("#resultsContainer").html('<p class="text-danger">Please enter a product name</p>');
      return;
    }

    // Filter the JSON data based on the search query
    var filteredData = jsonData.filter(function(product) {
      var productName = product.ProductName.toLowerCase();
      return productName.includes(searchQuery);
    });

    if (filteredData.length === 0) {
      // Display validation error if no results found
      $("#resultsContainer").html('<p class="text-danger">No results found</p>');
      return;
    }

    // Sort the filtered data by ProductName in ascending order
    filteredData.sort(function(a, b) {
      var productNameA = a.ProductName.toLowerCase();
      var productNameB = b.ProductName.toLowerCase();
      return productNameA.localeCompare(productNameB);
    });

    // Create HTML for the search results
    var resultsHTML = "<h2>Search Results</h2>";
    filteredData.forEach(function(product) {
      resultsHTML += "<p><strong>Product Name:</strong> " + product.ProductName + "</p>";
      resultsHTML += "<p><strong>Price:</strong> $" + product.Price.toFixed(2) + "</p>";
      resultsHTML += "<hr>";
    });

    // Display the search results
    $("#resultsContainer").html(resultsHTML);
  });
});
