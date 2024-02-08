var options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' }
];

// Function to add options to the select element
function addOptions() {
  var select = document.getElementById('mySelect');
  options.forEach(function(option) {
    var newOption = document.createElement('option');
    newOption.value = option.value;
    newOption.text = option.text;
    select.add(newOption);
  });
}

// Call the function to add options
addOptions();