# 🔮 Beyond Frontend Angular Assessment

![Angular 15.2+](https://img.shields.io/badge/Angular-15.2+-EC1C24?style=flat-square&logo=angular&logoColor=EC1C24)
![NodeJS 18.10](https://img.shields.io/badge/NodeJS-18.10+-green?style=flat-square)
![NPM 8.19.0](https://img.shields.io/badge/NPM-8.19.0+-red?style=flat-square)

## 📢 Introduction

This project is a simple Angular application for managing an online bookstore. We use
this project to assess technical capabilities for new candidates during our
recruitment process. It's purpose is to provide a familiar and realistic
template which can be used to complete four simple tasks.

## 📚 Background

The product owner has assigned to you 4 tasks for you to pick up to make the
application functional. This is a great opportunity to understand how we work
and see the process we follow to build and deliver high-quality work at Beyond.

- **GBI-001** Pull the current book catalog from the client's API and display it.
- **GBI-002** Create a book detail page to view information about the selected book
- **GBI-003** Create a form for adding a new book to the catalog
- **GBI-004** Add a search feature to the application

> **NOTE** You are free to design the new pages however you like with as little or
> as much design as you'd like. We'll be looking at the following when reviewing
> your submission; **Code standards**, **Unit tests**, **Complexity**, **Optimizations**,
> **Performance** and **Git usage**. If you're called for an interview, we'll reserve
> some time to discuss your submission. Think about the challenges you faced,
> your approach and improvements you'd make to this project.

> **TIP** Don't forget to include these ticket numbers in your commit(s).

## 📋 Tasks

Below is a detailed description of the tasks, once your tasks are complete you
may proceed to the section below.

**GBI-001**

- 🔲 Currently the books displayed in the catalog are hardcoded. Change the code
  so that they are being retrieved from `/api/v1/books`

**GBI-002**

- 🔲 Create a new route for a book detail page `/book/:id` that displays all the
  information regarding the user's selected book.

**GBI-003**

- 🔲 Create a form for adding a new book to the catalog using adequate
  validations.

**GBI-004**

- 🔲 Add a search functionality for searching books by name, author and/or genre.
  Genres should be able to be selected as options from existing genres in the
  current catalog.

> **TIP** We'll be looking at the following when reviewing your submission;
> code standards, complexity, optimizations, code performance and Git usage. If
> you're called for an interview, we'll reserve some time to discuss your
> submission. Think about the challenges you faced, your approach and
> improvements you'd make to this project.

## 📬 Submitting Your Work

**This project took time to create, please do not publish this work!**

To get your contributions over to us, please use one of the following options:

1. Create a **private** repo on Github and share access with a member of our
   team.
2. Send a `.zip` file containing this project, your contributions and the Git
   history.
3. Send a Git `.patch` file of your changes.

We'll assess your work and share feedback through the recruitment channels.

Thank you for taking the time to complete this technical assessment, we wish
you the best of luck and will be in touch.

## 🧭 Getting Started

### Prerequisites

- Install [nvm][nvm] to manage Node.js versions.
- [NodeJS] Open-source, cross-platform, back-end, JavaScript runtime environment.

[nvm]: https://github.com/nvm-sh/nvm
[nodejs]: https://nodejs.org/en/about/

### Local Development

Before running the NextJS Application locally install dependencies and NodeJS version.

```bash
nvm use
npm i
```

To run the Application locally use the `npm start` command then open [http://localhost:4200](http://localhost:4200).

### Commands

| Command                     | Description                                |
| --------------------------- | ------------------------------------------ |
| `npm run build`             | Build Angular app                          |
| `npm start`                 | Serve Angular app                          |
| `npm run format`            | Prettier formatting check                  |
| `npm run format:fix`        | Fix prettier formatting errors             |
| `npm run lint`              | Runs all linters                           |
| `npm run lint:scripts`      | Run eslint                                 |
| `npm run lint:scripts:fix`  | Fix eslint errors                          |
| `npm run lint:styles`       | Run stylelint                              |
| `npm run lint:styles:fix`   | Fix stylelint errors                       |
| `npm run test`              | Run tests                                  |

## ⚖️ Copyright

Copyright © 2022 Beyond. All Rights Reserved.

This software cannot be copied and/or redistributed via any medium without the
express written permission of Beyond. See the accompanying [LICENSE] for
details.

**Proprietary and confidential.**

[license]: LICENSE
