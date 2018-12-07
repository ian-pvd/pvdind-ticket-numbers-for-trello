# Ticket Numbers for Trello

Displays the short id number for Trello cards.

## Changelog

* 0.1.0 - Uses CSS to display the "simple id" ticket numbers next to the card title in the board view.
* 0.2.0 - Pad ticket numbers with leading zeros to at least three digits.
* 0.2.1 - Fix: Scripts & styles applied to all Trello pages, not just board view. 

## Roadmap

* Add ticket numbers to titles in card view.

## Known Issues & Bugs

* JS board selector occasionally fires before board has been added to the DOM.
* Add mutation observer to display ticket numbers on cards that have been added after the extension loads.
