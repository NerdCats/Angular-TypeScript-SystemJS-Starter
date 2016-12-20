#AngularJS 1.5.* + SystemJS + TypeScript Starter Kit

##Introduction
Let's admit, seed projects are overly complicated. Most of us have no clue what to do next
once you download and install yet another *Hello, World!* monstrosity of 300+ files. The below 
is a modest attempt to create a minimal viable solution for TypeScript + AngularJS 1.5.* 
project. Programming doesn't have to be so convoluted. Let's keep it simple and beautiful!

##TLDR
For those who believe in every word I say or maybe just don't care, the project is based on 
the following rather minimalistic set of tools and technologies:

* NodeJS for everything and npm for package management
* AngularJS 1.5
* TypeScript compiler
* Visual Studio Code IDE
* lite-server for lightweight web server

Install as described below and you're ready to go.

###Quick Installation 
Follow these steps:

git clone https://bitbucket.org/agilisconsultinglimited/angular-ts-starter-kit.git
cd angular-ts-starter-kit
npm install

To run the application web server enter the following:

    npm start

Navigate to [http://localhost:8182/](http://localhost:8182/) to see it.    

> Below steps describe in details how to configure the development environment, then how to create the project
> files from scratch. Please read it, even if you used the above quick installation, as you will learn the 
> structure of the project and the purpose of each file in it.

##Prerequisites
The components listed below are required before we start coding. Good news is that you only
need to set up these once (well, do update them once in a while :-)  

###NodeJS and npm
NodeJS is JavaScript runtime allowing to run JavaScript applications on your PC. NPM is one 
of such applications and it allows easy adding third-party components (a.k.a. packages) to
your project.   

Find the installer and instructions at [https://nodejs.org/en/](https://nodejs.org/en/)

Verify installation by running the following commands:

    node --version
    npm --version

###TypeScript compiler
Until browsers support ES6 (and ES7) natively, TypeScript compiler available at 
[https://www.typescriptlang.org/](https://www.typescriptlang.org/) is needed to generate 
plain JavaScript files. Huge benefit is validating your code during compilation, just like 
it goes with classic programming languages, C# or Java for example. 

Install TypeScript compiler by running the following commands (prefix with sudo if necessary):

    npm install typescript -g
    npm install typings -g

Verify installation by running the following command:

    tsc --version

The installed above *typings* package is a tool for easy referencing third-party libraries in your 
TypeScript code. If your TypeScript code performs calls to AngularJS components, Lodash utils etc., 
you need to include appropriate references, otherwise you'll receive compiler errors about various 
unknown methods and objects. Just like with C#, Java or python and their *import* or *using* statements. 
References come from [http://definitelytyped.org](http://definitelytyped.org) site, magnificent community 
effort to define TypeScript interfaces for all libraries of the world.

###Visual Studio Code
Visual Studio Code is a surprisingly lean and elegant cross-platform IDE from Microsoft.
Because we aim for simplicity, it's a good choice, as it natively supports TypeScript
without the need to configure elaborate build processes using grunt or gulp. With
with simple configuration it compiles TypeScript files to plain JavaScript just like that. 

Find the installer and instructions at [https://code.visualstudio.com](https://code.visualstudio.com)

Verify installation by running the following command:

    code --version

and start Visual Studio Code opening the current folder by running the following command: 

    code .

> PS. Did I mention it has extensions and supports git out of the box?

> PPS. I use Code daily on OS X and Linux Mint and it works perfectly, 
> even if it is a Microsoft thing.


###Project Metadata
You need a folder for the project and in it some metadata indicating that it's a JavaScript project,
and infact also a TypeScript project.

> TypeScript is a superset of JavaScript, did you know that?

    mkdir my-angular-ts-project
    cd my-angular-ts-project
    npm init
    tsc init

As a result of the above, two files will be created in the application folder:

    package.json
    tsconfig.json

The first is the usual metadata about your web application. The other contains instructions
for TypeScript compiler. You will be further editing it later. 

###External Dependencies
Add AngularJS to your application:

    npm install angular --save
    typings install dt~jquery --global --save
    typings install dt~angular --global --save

The last two commands install reference files which will allow you use functions and
variables from JQuery and AngularJS libraries in your projects, without causing compiler
errors about unknown identifiers.


###Folders and files
Now add a few more folders and files that will make the actual application:

    touch index.html
    mkdir src
    cd src
    touch app.ts

Now go to project main folder and run Visual Studio Code:

    code .
  

Open the files in Visual Studio Code and add the following:      

##Tips and improvements
###Ignore generated files and other cruft
Even in this relatively simple setup we end up with a number of auto-generated folders 
and files. It's good to keep these out of sight, while in Visual Studio Code. To do that,
go to *File / Preferences / Workspace Settings* and add the following to the settings.json
file:

    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
        "**/*.js": { "when": "$(basename).ts" }    
    }

This will hide all .git, .svn, .tmp, OS X .DS_Store as well as node_modules folders.
Additionally, all JavaScript files generated by TypeScript compiler will be hidden 
- after all, you are not expected to ever edit them manually.  

