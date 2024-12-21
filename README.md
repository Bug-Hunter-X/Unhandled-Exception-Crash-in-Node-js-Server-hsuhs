# Node.js Unhandled Exception Handling

This repository demonstrates a common error in Node.js server development: unhandled exceptions leading to server crashes.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution.

## Problem

The `bug.js` example lacks proper error handling.  If an unexpected error occurs during request processing (e.g., database connection failure, file system error), the server will terminate abruptly.  This is disruptive to users and makes the application unreliable.

## Solution

The `bugSolution.js` file addresses this by implementing comprehensive error handling using the `server.on('error', ...)` event listener.  This allows the server to gracefully manage errors, log them for debugging, and potentially attempt recovery (e.g., restarting a database connection).