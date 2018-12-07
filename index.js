/**
 * Ticket Number for Trello JS
 */

// Get the Trello board
const board = document.getElementById('board');

// If the board was selected
if (board != null) {
  // Get the card IDs from the board
  Array
    .from(board.querySelectorAll('.list-card'))
    .forEach(card => formatIdNumber(card));
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
