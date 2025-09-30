const printMessage = (message) => {
    console.log(message);
};
const wait=(mesaage,sec)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        printMessage(mesaage);
        resolve();
    }, sec);
})
}
const bookTicket = () => {
    printMessage("Booking ticket...");
    wait("Ticket booked successfully!", 2000)
        .then(() => wait("Sending confirmation email...", 3000))
        .then(() => wait("Email sent successfully!", 5000))
        .then(() => printMessage("End of the program"));
}