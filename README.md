https://rebeckaslatter.com

# To setup on MacOS:

1. Open the Terminal app.

2. If you have never done it, run
```bash
xcode-select --install
```
it will take some time to complete.

5. You must have node (Node.js) installed. You can check what version you have by running
```
node --version
```

8. If you get a number you have it installed, otherwise you'll get a message saying that the node command does not exist or similar.

9. And if you don't have a version of node install it as follows:

<br/>

<details>
  <summary>How to install node</summary>
   <ol>
     <li>Install nvm: run <i>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</i> from anywhere in the terminal</li>
     <li>Nvm is a tool for managing versions of node. Node is the engine for reading Javascript code.</li>
     <li>After that, run <i>source ~/.zshrc</i> to reload the terminal environment.</li>
     <li>Check if you have nvm by running <i>nvm --version</i>. You should get a number.</li>
     <li>Use nvm to install node by running <i>nvm install node</i> (it's the latest version) and then check if all went well with <i>node --version</i>.</li>
   </ol>
</details> 

<br/>

6. Then run
   ```
   mkdir -p ~/Desktop/rebeckaslatter
   ```

8. Then
   ```
   cd ~/Desktop/rebeckaslatter
   ```

12. Once done you can run
    ```
    npm install
    ```
    , to install all the dependencies and packages the site needs to work.

<br/><br/>

# Start up

1. Open the folder with the project on VSCode.

2. Press Option + Backtick to toggle the terminal panel and run

```npm run start```

5. Then you can visit the local site on <a href="http//:localhost:3000">http//:localhost:3000</a>

6. You can stop it by pressing Control + C in the terminal where it's running.


<br/><br/>

# Make changes to the site

- You will need to edit the code in your preferred editor (I recommend VSCode) and save those changes (activate autosave). Open the VSCode terminal. Make sure you are on the main branch. You can see that by running git branch, and the current one has an asterisk. Close with `q`.

  From here you can have 2 types of approach:
- safe
- comfortable

## Safe Way

**This method works well when you commission the work to a third party.**

1. Open the VSCode terminal. Make sure you are on the main branch and create a new branch by running
   ```
   git checkout -b name-of-my-branch
   ```
   replace `name-of-my-branch` with a short name (no spaces) to describe the changes you want to make.
   
2. Now you are on a different branch. Here the changes you make here do not affect what is on the main branch.

3. Edit the code and look at how the localhost changes as you edit. Make sure the local site is running before you edit.

4. Once you are done run 
  ```
  git status
  ```
  to see a list of the files you have made changes to in red
  
5. you can add only the files you want to confirm by using 
  ```
  git add path1 path2 path3...
  ```
where each path is each of the red lines. For simplicity you can run `git add .` to add all the changes.

6. run 
  ```
  git commit -m "a short message to describe the changes"
  ```
to save the changes and create a checkpoint in time where you can go back to. A commit means basically "small goal achieved, now save it".

7. Run
  ```
  git push
  ```
and if prompted to run another command, then run it. This will bring your local branch (and your commits) on Github. You might see a yellow popup appearing when you go on github.

8. Go to Pull Requests and open a new one.

9. On the left select the main branch, on the right select the name of the branch you created locally.

10. Open the pull request and you can see what changes have been made. Someone (Rebecka) can then review the changes and merge them if approved.

11. Once the pull request is merged, your code is now on your main branch on Github.

12. Locally (on the VSCode terminal), go back to the main branch by running 
  ```
  git checkout main
  ```
You didn't merge to main locally, but on Github. Your local is not up to date. Update it by running
  ```
  git pull
  ```
and your local main branch will contain the code that is on Github.

## Comfortable (but riskier) way

- Make sure you are on the main branch
- Make your changes
- run `git add .` 
- run `git commit -m "enter your message here"`
- run `git push`

