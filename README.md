🔑 Password Generator

    This is a functional solution to a Frontend Mentor challenge. The goal was to build a secure generator with a specific UI and set of logic requirements.

🏗️ How I Structured the Code

    I built this project using a Class-based (OOP) approach to keep the state and the UI logic connected but organized.

    Logic: The AppPasswordGenerator class handles all events—from the range slider updates to the password generation algorithm.

    Encapsulation: I used private class fields (#) to ensure that internal data (like the generated password or the function list) isn't accessible from the global scope.

    Styles: Written in SCSS using mixins for layout consistency and variables for the project’s specific color palette.

⚙️ Core Logic
    The main challenge was ensuring the password strictly follows the user's selected criteria.

    I implemented a validation check using a while loop. If the user selects "Symbols" and "Numbers," the generator will keep running until the final string contains at least one of each.
    

🛠️ Tech Used

    HTML5 & SCSS (Modular architecture)

    JavaScript ES6+ (Classes, Private Fields, Async/Await)

    Clipboard API (For the copy-to-clipboard feature)