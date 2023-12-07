[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Chat AI - Smart Messenger

## Overview

Chat AI is an innovative project that leverages AI and ChatGPT technology to create a dynamic and interactive chatbot. The project is built on Laravel and Angular 2, combining the robust backend capabilities of Laravel with the modern frontend features of Angular 2.

## Features

### Custom Bot Personalities

Allow users to choose between different bot personalities, such as formal, friendly, or humorous. Depending on the selected personality, adjust the instructions sent to the OpenAI API or preprocess user inputs to influence the chatbot's responses.

### Message Search

Implement a feature allowing users to search within their chat history. This may require a robust text-search mechanism in the backend, potentially leveraging database capabilities or additional search libraries.

### Stop Button

Add a stop button to halt the bot from generating text, providing users with control over the conversation.

### Typing Indicators

Display a "typing..." indicator when the bot is processing and formulating a response, enhancing the real-time chat experience.

## Design

A clean and user-friendly interface built on Laravel and Angular 2 that promotes a seamless interaction with the Chat AI. The design should effectively showcase the implemented features:

- Custom Bot Personalities
- Message Search
- Stop Button
- Typing Indicators

## Configurations

### Laravel Configuration

```plaintext

# Install dependencies
1. composer install

# Copy environment file
2. cp .env.example .env

# Generate application key
3. php artisan key:generate

# Configure database settings in .env

```

### Angular Configuration

```plaintext
# Install dependencies
1. npm install

# Start the development server
2. ng serve

# Update API endpoint in Angular code
```
