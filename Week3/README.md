# F28WP-lab1

                            Slideshow Creation Report

- The primary goal of this work was to use HTML and JavaScript to create a slideshow for the website's gallery page. The main objective was to create an eye-catching element that would cycle through a number of photos, improving the look and feel of the website.
- My approach was to first create an outer div element with the class "container". This element would have sub-elements with the class "mySlides".
Each element with the class "mySlides" would have one slide (image) each, sourced from the images folder. At the end, I also made elements for the 'next' and 'prev' buttons.
- Next, I made a javascript file called "slideshow.js" to support the functionality of the slideshow. This .js file includes two functions-  showSlides and plusSlides. To make sure the slides wrap around and cycle from the start, I implemented if conditions as well.
- Overall, the challenges I faced were design issues like the size, font and color of the slideshow's "next" and "prev" buttons. I had to adjust these design options in the style.css file to make the buttons fit better with the slideshow container and so the color of the button is visible on each and every slide. 


                            Form Validation Report

Here is my intial approach to making the registeration form:
- I started by making a seperate .html file called form.html and created <div> elements for Username, Password, Email, and Confirm Password along with placeholder <div> elements for each for their respective errors. I then created a submit button for form submission. All of this falls under a <form> element.
- For styling of the form, I implemented the CSS code provided with the task. The style.css file covers design of all elements of the form.

Using Javascript to creat real-time form validation:
- I set up event listeners for each input field (blur event) to validate the data in case the field loses focus.
- I added a submission event listener which will only submit the form if all validation criteria is satisfied
- To validate username, password, email and confirm password, I created separate functions. Each of these functions check for different conditions and update error messages accordingly.
- Implementing validation standards for every field, such as ensuring that the passwords match, verifying that the email format is correct, and looking for empty fields.
- Displaying suitable error messages for each time the validation condition is not met.
- Making sure the user knows of these errors, by giving visual feedback like changing of border color.

The challenges that I faced while developing the form are as follows:
- It was slightly difficult to design the validation logic for every input field since I had to take into account every potential error and design the validation form accordingly.
- It was challenging to provide error messages that are understandable and helpful for users to figure out what went wrong. It's crucial to strike a balance when it comes to error message detail.

At the end i overcame these challenges simply by testing various scenarios for the input fields of the form and making sure it handles all cases appropriately and simplifying the code into functions maintain readability and understanding of the code.