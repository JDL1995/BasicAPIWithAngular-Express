# BasicApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.
Use the latest version of node and angular;
to run this program run npm install in both this directory and the "backend" directory;
to run the backend with a visual display of logging use: "DEBUG=express:* node server.js" in the backend directory;
to run the main app, use "ng serve" in a seperate window in this directory;

About this app:
It is an extremely basic example of an angular application that interacts with an express js server backend;
The bulk of the work is done in the app.component.ts, http-service.ts, on the frontend, and the app.js, routes, and controllers in the backend.
it also contains some notable code in the html and css parts of app, and the imported necessary modules in app.module are the bare neccesities for this app to function. 


What you see:
you can see the text box, and see in the terminal window the api calls that are made when you submit the text box.  If you open the developer tools in your browser you can see the raw return of the call and on the screen you can see the "processed: " which is appended to the data on the backend before it is sent back;

