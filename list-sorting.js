$(function() {
  $( "ul" ).sortable({ 
    axis: "y",
    containment: "parent",
    items: "li",
    tolerance: "pointer"
  });
  $( "ul" ).disableSelection();
});
