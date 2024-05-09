$(function() {
  // Initialize the sortable functionality for the <ul> element.
  $( "ul" ).sortable({ 
    axis: "y", // Allow sorting only along the vertical (y) axis.
    containment: "parent", // Restrict sorting within the parent element of the <ul>.
    items: "li", // Specify that only <li> elements inside the <ul> can be sorted.
    tolerance: "pointer" // Define the tolerance for sorting as "pointer" (sortable activates when pointer overlaps an item).
  });

  // Disable text selection within the <ul> element to prevent accidental text selection during sorting.
  $( "ul" ).disableSelection();
