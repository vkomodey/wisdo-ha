## Summary:
1. Environment variables are located in the .env file
2. MongoDB run by docker-compose setup
3. Implemented users and posts(+feed) module with an appropriate APIs
4. Score calculation is implemented as a separate "job" logic, which should be run on schedule by cron or any other similar package. It scans all posts with outdated scoreUpdatedAt field and run an update-aggregation query
5. The application is divided by modules. Each module has everything it needs for the work
The module consists from:
 - Router: responsible for handling the API layer
 - Controller: controls the flow of the particular use-case. Top level layer for the business logic
 - Entity: this is a business entity without details about any outer world
 - Repository: entry point for database operations. Includes data mapper pattern, which connects database and business areas
 - Model: this is the place where you can find schema and mongoose specific things. Should be used only within a repository


## What should be done next:
1. Approve logic from moderators
2. Community management module
3. View posts restriction(based on community) for regular users
4. Use case validation: this includes API schema validation and business validation(2 different layers)
5. Sort and sanitize the output from the router to the outer world(make DTOs for responses)
6. Add express error handlers with appropriate error interfaces
7. Dependency Injection within modules
8. Unit and E2E tests
9. ESlint