/**
 * Ticket Number for Trello JS
 */

// Get Trello Board
getBoard().then(() => {
  // Get the board(?)
  const board = document.getElementById('board');

  console.log('then, format numbers...');
  // Get the card IDs from the board
  Array
      .from(board.querySelectorAll('.list-card'))
      .forEach(card => formatIdNumber(card));
});

// Wait for the Trello board to load
async function getBoard() {
  console.log('Checking for the board.');
  // Check for the board:
  while (document.getElementById('board') === null) {
    console.log('waiting for the board to load:' + document.getElementById('board'));
    // Wait for board to load
    await new Promise(resolve => {
      requestAnimationFrame(resolve);
    });
  }
  console.log('board has loaded');
  // Board has loaded
  return true;
}

// Formats the card ID number
function formatIdNumber(card) {
  // Get the card ID for each card
  const cardId = card.getElementsByClassName('card-short-id');
  // Get the ticket number from the card ID
  let ticketNumber = (cardId[0].textContent);
  // Remove leading '#' character
  ticketNumber = ticketNumber.replace('#','');
  // Pad the number string with zeros to three places
  ticketNumber = ticketNumber.padStart(3, '0');
  // Add the '#' character
  ticketNumber = '#' + ticketNumber;
  // Update DOM with formatted string
  cardId[0].textContent = ticketNumber;
}
