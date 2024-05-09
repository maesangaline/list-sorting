# Sortable List

This is a simple jQuery script that enables sortable functionality for a list using the jQuery UI Sortable plugin. It also disables text selection within the list for a better user experience during sorting.

## Getting Started

To use this script, follow these steps:

1. Include jQuery and jQuery UI libraries in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"></script>
```

2. Add the provided JavaScript code to your HTML file or include it in an external JavaScript file:

``` javascript
$(function() {
  $( "ul" ).sortable({ 
    axis: "y",
    containment: "parent",
    items: "li",
    tolerance: "pointer"
  });
  $( "ul" ).disableSelection();
});
```

3. Make sure your HTML structure includes an unordered list (<ul>) with list items (<li>) that you want to make sortable:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Configuration Options

- `axis`: Specifies the axis along which sorting is allowed ("x" for horizontal, "y" for vertical).
- `containment`: Restricts sorting to within a specified element or the viewport.
- `items`: Specifies which items within the list are sortable.
- `tolerance`: Defines the sensitivity of sorting activation ("pointer" activates sorting when the cursor overlaps an item).
