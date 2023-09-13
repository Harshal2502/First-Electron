# Currency Converter Electron App

![Currency Converter Screenshot](screenshot.png)

## Description

Currency Converter is a simple desktop application built with Electron.js that allows users to convert between different currencies. It fetches real-time currency exchange rate data from the ExchangeRate-API and provides an easy-to-use interface for currency conversion.

## Features

- Dropdowns for selecting 'From' and 'To' currencies.
- Input for the amount to be converted.
- Button to initiate the currency conversion.
- Display of the converted currency value.
- Real-time currency exchange rate data from ExchangeRate-API.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/currency-converter-electron.git
   ```
2. Navigate to project directory
   ```bash
   cd currency-converter-electron
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the Electron App
   ```bash
   electron .
   ```

## Usage

- Launch the Currency Converter Electron app.
- Select the 'From' and 'To' currencies from the dropdown menus.
- Enter the amount you want to convert.
- Click the "Convert" button to see the converted currency value.
- The result will be displayed below the input fields.

## API
The app uses the ![ExchangeRate-API](https://www.exchangerate-api.com/) to fetch currency exchange rate data.
