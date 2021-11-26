<div id="top"></div>

<br />
<div align="center">

  <h3 align="center">Node JS CLI Assessment</h3>

  <p align="center">
    A simple CLI application that parses input files and returns an expected output after sorting.
    <br />
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Application</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project

A simple NodeJS CLI application that parses input files and returns an expected output after sorting.

Sorting Methods:
* BY GENDER,FEMALES FIRST, THEN BY LASTNAME ASCENDING
* BY BIRTHDAY, THEN BY LASTNAME ASCENDING
* BY LASTNAME DESCENDING


### Built With

* [Node.js](https://nodejs.org/en/)
* [Jest JS](https://jestjs.io)


## Getting Started

Set up the CLI locally.
To get a local copy up and running follow the simple example steps below.

### Prerequisites

* npm & Node.JS
  ```sh
  npm install -g npm
  ```
* Check npm & Node.JS proper installation
  ```sh
  node -v //v14.9.0
  npm -v  //6.14.10
  ```

### Installation

* Installing CLI Tool

1. Download ZIP File, Unzip file & open in IDE
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install Global Commands
   ```sh
   npm install -g .
   ```
4. Run Sorting Command
   ```sh
   sort
   ```
5. Uninstall Global Commands -- when you're done.
   ```sh
   npm uninstall -g defmethod-cli
   ```

* Running Jest Unit Tests

1. Install Jest-(if not already installed above)
   ```sh
   npm install jest --save-dev
   ```
2. Running Tests
   ```sh
   npm test
   ```


## Usage

This script sorts SPECIFIC .txt files in the file folder. Comma delimited, pipe delimited and space delimited input files. The order of properties are different for each .txt file. 
After sorting the properties are displayed by "last name, first name, gender, date of birth, favorite color"


## Contact

Nasir Abdirahman - [@LinkedIn](https://www.linkedin.com/in/abdul-nasir-abdirahman/) - nasir.a.abdirahman@outlook.com
