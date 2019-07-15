This is one of my first projects in React Platform.

## Counter Application

In the project, I have made 4 buttons and a dynamic diplay. Topics of state and setState has been introduced in the application. All the buttons used in the application uses `this.setState` to modify the state of the application which has been defined at the start using `this.state`.

### Reset Button

Regardless of the value of the display number. This button sets the number back to 0. This has been done by setting the value of the number stored in the state of the application to 0.

### Increment Button

This button is there to increase the count or number displayed by a single or double count. There is no upper limit to it.

### Decrement Button

This button is there to decrease the count or number displayed by a single or double count. An edge case has been integrated so that the count is never negative.

### Toggle (Single count vs Double count) Button
This button toggles between the numbers 1 and 2, which are the values by which the display number is modified according to the button pressed.

**Note: The button name also changes to indicate whether the modification will be by 1 or 2, written as single count or double count.**
