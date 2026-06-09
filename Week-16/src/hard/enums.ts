// Problem Statement
// Write a function that describes a selected seat position on a flight.

// Use an enum to represent the possible seat positions: Window, Middle, and Aisle.
// The function should take the seat position as input and return a corresponding message.
// If the input is invalid, the function should throw an error.
// Ensure proper type annotations and error handling.

// Example Input:
// SeatPosition.Window

// Example Output:
// "You have selected a window seat."

enum SeatPosition {
    Window = "window",
    Middle = "middle",
    Aisle = "aisle"
}

 function getSeatDescription(seat: SeatPosition) {
    if (
        seat !== SeatPosition.Window &&
        seat !== SeatPosition.Middle &&
        seat !== SeatPosition.Aisle 
    )
    {
       throw new Error("Invalid seat position");
       
        
    }
    else {
        return `You have selected an ${seat} seat.`
    }

}


export {getSeatDescription, SeatPosition}