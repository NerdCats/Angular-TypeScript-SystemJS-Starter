#AngularJS 1.5.* + TypeScript Starter Kit

##Introduction
Let's admit, seed projects are overly complicated. Most of us have no clue what to do next
once you download and install yet another *Hello, World!* monstrosity of 300+ files. The below 
is a modest attempt to create a minimal viable solution for TypeScript + AngularJS 1.5.* 
project. Programming doesn't have to be so convoluted. Let's keep it simple and beautiful!

A separate project will follow soon, based on AngularJS 2.0, stay tuned!

> Warning!
>  
> This project *IS NOT* an attempt to create yet another skeleton of a complete web
> application nor to teach you AngularJS nor TypeScript. It's just a modest helper tool 
> to kickstart barebones web application based on AngularJS and TypeScript, with as few 
> dependencies and prerequisites as possible. The rest is up to you. If you do need that 
> 10,000 lines gulp build script and all the other bells, webpacks, protractors and whistles, 
> go for it. Just don't ask to include it in this project, however ingenious and 
> revolutionary it might be. I honestly believe that the remaining 99.5% of humanity 
> won't need it either.  

##TLDR
For those who believe in every word I say or maybe just don't care, the project is based on 
the following rather minimalistic set of tools and technologies:

* NodeJS for everything and npm for package management
* AngularJS 1.5
* TypeScript compiler
* Visual Studio Code IDE
* express for lightweight web server

Install as described below and you're ready to go.

###Quick Installation 
Follow these steps:

* Install the project using npm
* Find the files in ./node_modules/angular-ts-starter-kit folder
* Move it wherever it suits you

Come on, why waste time on creating yet another application generator, while all you need is this:

    npm init -f
    npm install angular-ts-starter-kit
    mv node_modules/angular-ts-starter-kit .
    rmdir node_modules

Alternatively, clone the project from git repository:

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

> I strongly refuse to call it "transpiler", as is not a word, and here's a proof: 
> [http://www.oxforddictionaries.com/spellcheck/english-thesaurus/?q=transpiler](http://www.oxforddictionaries.com/spellcheck/english-thesaurus/?q=transpiler) 
> (please notify me when it changes).

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
    mkdir app
    cd app
    touch initialize.ts
    mkdir welcome
    cd welcome
    touch welcome.html
    touch welcome.ts 

Now go to project main folder and run Visual Studio Code:

    code .

###TypeScript Compiler
To configure the project to be built with TypeScript compiler, click on *View / Command Palette*,
type 

    tasks 

click *Configure Task Runner* option, then *TypeScript - tsconfig.json - Compile a TypeScript project* option. This will create a *tasks.json* file in *.vscode* folder. If you press 
now *CTRL + SHIFT + B* keys (*CTRL + OPTION + B* on Mac), TypeScript compiler will try to 
build your project. But which files exactly? You need to specify TypeScript files to compile
in *tsconfig.json* file created above. Open the file in Visual Studio Code and add the 
following entry to it:

    "files": [
        "app/initialize.ts",
        "app/welcome/welcome.ts
    ]

Each time you add another TypeScript file to your project, you need to list it also here,
so that it's included in the build process. 

> Warning! 
> 
> In the options above there was also *watch* mode available. We don't recommend 
> using it though. Better to rely on *tsconfig.json* file, as it allows building 
> the project from command line using *tsc* compiler.   

###Application Code
Our application will be made of a single page with an embedded component. If you executed
the above commands, you already have the application files in place, just empty:

* index.html - start page of the application
* app/initialize.ts - initialization code
* app/welcome/welcome.html - sample component UI
* app/welcome/welcome.ts - component code

Open the files in Visual Studio Code and add the following:

####index.html

    <html ng-app="app">
        <head>
            <title>
                AngularJS + TypeScript Starter Kit
            </title>
            <script src="node_modules/angular/angular.min.js">
            </script>
            <script src="app/initialize.js">
            </script>
            <script src="app/welcome/welcome.js">
            </script>
        </head>
        <body>
            <welcome></welcome>
        </body>
    </html>

####app/initialize.ts

    namespace AngularTypeScriptStarterKit {
        angular
            .module('app', []);           
    }

####app/welcome/welcome.html
    <div>
        <h1>
            {{$ctrl.Text}}
        </h1>
        <button ng-click="$ctrl.confirm()">Confirm</button>
    </div>

####app/welcome/welcome.ts
    /// <reference path="../../typings/index.d.ts" />
    namespace AngularTypeScriptStarterKit {
        // UI logic for <welcome> component
        class WelcomeController {        
            constructor() {
                this.Text = "Welcome to AngularJS + TypeScript Starter Kit!";
            }     

            public Text:String;

            public confirm() {
                this.Text = "It is awesome!";
            }
        }

        // register <welcome> component with AngularJS 
        angular
            .module('app')
            .component('welcome', {
                templateUrl: 'app/welcome/welcome.html',
                bindings: {
                },
                controller: WelcomeController
            });
    }

####Is that it?
Yes, it's THAT simple:

* index.html loads AngularJS library and JavaScript files compiled from TypeScript code. 
  You can see <welcome> component embedded in the page body.
* initialize.ts creates AngularJS module. Neatly wrapped in TypeScript namespace
  AngularTypeScriptStarterKit, so no naming conflicts with other libraries.
* welcome.html outputs some HTML with AngularJS data bindings. Data and behavior comes 
  from the AngularJS controller
* welcome.ts defines AngularJS controller for the above. Proper TypeScript class, safely
  hidden as private. Additionally definition of AngularJS component represented by 
  <welcome> tag, composed of *welcome.html* UI and *welcome.ts* logic,  

###Server
In order to use a web application, you need to host it on a web server. For development
purposes you can just use NodeJS and create a local web server. NodeJS comes with built-in 
web server component, but we'll use a third-party component called Express instead, as 
it's much easier to serve HTML and JavaScript files with it. 

To create a web server, go to your project's root folder and run the following commands:

    mkdir server
    cd server
    npm init
    npm install express save 
    touch server.js
    code server.js

Type in the following code:

    // server.js
    var port = 8182;
    var express = require('express');
    var http = require('http');
    var app = express();
    app.use(express.static(__dirname + '/..'));
    http.createServer(app).listen(port);

Run the following command while inside /server folder:

    node server.js

The server is now listening and serving all files from main project folder.
Open your preferred browser and navigate to [http://localhost:8182](http://localhost:8182)
to see the web application.         

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

