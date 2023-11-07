var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://am2356.github.io/Week4/cities1.json'); 
ourRequest.onload = function () { 
    console.log(ourRequest.responseText); 
}; 
ourRequest.send();