const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
    res.end('Hello World');
    } else if (req.url === '/about'){
    res.end(`Here is our short history`)
    } else {
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/"> Back to Home</a>
    `)
    }
})

server.listen(3000)

//Port 5000 gave me an error - Error: listen EADDRINUSE: address already in use :::5000
//Port 3000 worked fine. Read docs- https://nodejs.org/en/docs/guides/getting-started-guide/
// Cannot find module error - as modules are files that are executed when the node process starts. The error suggests that you maybe on the wrong directory in the terminal.

// GIT
// git rebasing is a process where you take your current branch and merge it with another branch.
// git branching is a process where you create a new branch and start working on it.
// git checkout is a process where you switch to a different branch.
// git merge is a process where you merge two branches.
// git push is a process where you push your changes to a remote repository.
// git pull is a process where you pull changes from a remote repository.
// git status is a process where you check the status of your local repository.
// git add is a process where you add a file to your local repository.
// git commit is a process where you commit your changes to your local repository.
// git log is a process where you see the history of your local repository.
// git clone is a process where you clone a repository.
// git checkout -b is a process where you create a new branch.
// git checkout -b --track is a process where you create a new branch and track it.
// git branch -d is a process where you delete a branch.
// git branch -m is a process where you rename a branch.
// git branch -v is a process where you see the status of all your branches.
// git branch -a is a process where you see all your branches.
// git branch -r is a process where you see all your remote branches.
// git remote add is a process where you add a remote repository.
// git remote rename is a process where you rename a remote repository.
// git remote remove is a process where you remove a remote repository.
// git remote set-url is a process where you change the URL of a remote repository.
// git remote show is a process where you see the URL of a remote repository.
// git remote -v is a process where you see all your remote repositories.
// git fetch is a process where you fetch changes from a remote repository.





