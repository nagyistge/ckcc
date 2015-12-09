## California Kids Cancer Comparison (CKCC) Demo

Rewrite of the CRFs and Clinical-Trials apps, with a modularized package-based component/microservice architecture.

![Travis Status](https://travis-ci.org/awatson1978/ckcc.svg?branch=multiuser)

=========================
#### Installation  
Copy the application to your computer and run it locally:

````sh
  git clone https://github.com/awatson1978/ckcc
  cd ckcc
  meteor
````


=========================
#### Development
You'll want to fetch all of the packages in ``.meteor/packages`` directory into ``/packages`` so you can develop on them locally.

````sh
  cd ckcc

  # clone the necessary directories
  git submodule foreach git pull origin master

  # or be adventures, and use the starrynight fetch command, which uses the .meteor/repo file
  npm install -g starrynight
  cd ckcc
  starrynight fetch
````

If you're running a local installation of Mongo, and working on inter-app functionality, you may want to specify the ``MONGO_URL``, like so:
````sh
MONGO_URL="mongodb://localhost:27017/MyAppDatabase" meteor
````


=========================
#### Deployment
Be sure to set the ROOT_URL with the appropriate prefix when deploying behind a proxy server.

````sh
ROOT_URL="http://localhost:3000/forms" meteor
````

=========================
#### Testing  
Copy the application to your computer and run it locally:

````sh
  npm install -g starrynight
  starrynight generate --autoconfig
  starrynight run-tests --framework nightwatch
````


=========================
#### Licensing  

Code is MIT.  Use as you will.
Corning Day Made of Glass video is copyright Corning; all rights reserved.
