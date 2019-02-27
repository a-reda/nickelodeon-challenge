# nickelodeon-challenge

## Instructions

1. Go to the Issues Tab where you will find a description of the task
2. Clone this repository
3. Create a branch named challenge-[your name]
4. Try to complete each item under the Acceptance Criteria.
5. You may choose to use Vanilla Javascript, jQuery, or even a more robust solution such as Backbone, Angular or React.
  However we recommend you choose whichever is most comfortable and will allow you to best demonstrate your coding ability!
  We're looking for code quality, not framework expertise.
    * If you don't have any preference, you can use [`create-react-app`](https://github.com/facebook/create-react-app) which let you create a simple React project.

    For futher details on `create-react-app`, please see https://github.com/facebook/create-react-app
    
    
    In order to use `create react app` you need:
    - nodejs + npm
    
      https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

    - (optionally) nvm
      
      https://github.com/creationix/nvm#installation-and-update


    ```
    $ npm init react-app nickelodeon-tv-schedule

    # optional, if the above commmand fails
    $ nvm use 10

    $ cd nickelodeon-tv-schedule

    $ npm install

    $ npm start

    ```
Optionally you can download a tv schedule in json format and use it in your local server:

```
$ curl http://www.nickjr.it/data/schedule.json -o public/schedule.json
```

Then in your code you can fetch it using
```
fetch('/schedule.json').then(/* do something ... */)
```

6. Once you are done, send a Pull Request from your branch back to master with your solution

**Best of luck!!**
