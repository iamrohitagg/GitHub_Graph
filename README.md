# Github Bot

![alt text](https://img.shields.io/npm/v/moment.svg?style=flat "moment")
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)<br>
Does your GitHub Graph looks like a noob with a few number of Commits and Push ? Do you want to have your contribution graph with lots of commit like pro. This project is to your rescue.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Commits](#frequency)

### Introduction

The project uses [Moment](https://www.npmjs.com/package/moment), a JavaScript date library for parsing, validating, manipulating, and formatting dates. It allows you to make a commit on past date done by subtracting the years from given date and make commits over a period of regular days. Also you can do alot with this code.

### Installation

Clone and fork the repository to make the changes in your local system.

```git-bash
git clone https://github.com/iamrohitagg/GitHub_Graph.git
cd Github_Graph
```

The following command creates a directory named node_modules and installs all the required packages in that.

```javascript
npm install
```

Finally, run the project to see the magic of Moment package.

```javascript
node index.js
```

Bang !
You can see the commit date in terminal.

### Commits

```javascript
subtract(year, "y");
```

year here represents the year to start the commits. Greater the value of year, more dense the graph along main axis. Example - subtract(2,'y')

```javascript
add(days, "d");
```

Difference of commits between timestamps. Less the value of days, more dense the contributon graph will be. Example - add(4,'d')

### Reference
[YouTube](https://www.youtube.com/watch?v=2q--gA97caM)
