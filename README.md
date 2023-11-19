# React + Vite

# React Profile Viewer

This project creates a class-based component (App) that manages a person object within its state along with a show boolean to toggle the visibility of the person's profile. Additionally, it calculates and displays the time interval since the component mounted using the componentDidMount() lifecycle method and setInterval() function.

It is a simple React application that displays my profile and tracks the time elapsed since the component mounted. It utilizes state management, conditional rendering, and inline styling in React.

The profile container is centered both horizontally and vertically on the page (minHeight: '100vh' and flexbox properties).
Added a background color to the main container for better visibility.
Styled the toggle button with a background color, padding, border-radius, and cursor for a more appealing appearance.
The profile box has a solid background color, a box shadow effect, and a slightly rounded border for an elegant look.
Adjusted the text colors and styles to complement the overall design.

## Features

- Displays a person's profile information when the "Show Profile" button is clicked.
- Tracks the time elapsed since the component mounted.
- Utilizes inline styling for profile elements.

## How i went about breaking the fullName into seperate lines
// Splitting the full name into an array based on spaces and storing it in 'names'
const names = person.fullName.split(" ");

// Extracting the first name from the 'names' array and storing it in 'firstName'
const firstName = names[0];

// Combining the remaining elements (from index 1 to the end) of 'names' array into a string separated by spaces and storing it in 'middleLastName'
const middleLastName = names.slice(1).join(" ");
These comments detail the purpose of each line:

Splitting Full Name: Splits the full name string (person.fullName) into an array of strings by separating it wherever there's a space, and assigns it to the names array.

Extracting First Name: Assigns the first element of the names array to the variable firstName, which represents the first name of the person.

Combining Middle and Last Names: Uses slice() to extract elements from index 1 to the end of the names array, then joins these elements back into a single string separated by spaces, assigned to the variable middleLastName. This variable contains the combined middle and last names of the person.


