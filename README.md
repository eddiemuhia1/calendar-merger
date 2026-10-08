Flat Calendar Merger & Formatter

A lightweight Node.js utility designed to merge multiple calendar event schedules and convert ISO 8601 timestamps into clean, human-readable date formats.

Features

- Calendar Aggregation: Combines event lists from multiple sources into a single consolidated array using ES6 spread operators.
- Custom Date Formatting: Transforms raw ISO timestamps (e.g., `2024-06-15T12:00:00`) into readable formats (e.g., `12:00pm June 15th, 2024`) using `date.js`.

Tech Stack

-Node.js
-JavaScript (ES6+)
-[date.js](https://github.com/datejs/Datejs) (Date manipulation library)

Getting Started

Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

Installation

1. Clone this repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/flat-calendar.git](https://github.com/YOUR_USERNAME/flat-calendar.git)
   cd flat-calendar

2. Install Dependencies
    npm install date.js

3. Run the Project File
    node index.js