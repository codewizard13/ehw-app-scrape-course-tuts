<link href="../style.css" rel="stylesheet"></link>

# Standard Operating Procedure (SOP) for: 

<h3 class="course-title">Preparing and Publishing Course/Tutorial Notes & Tutwrk to GitHub</h3>

---

## Pushing existing local repo to GitHub:

### 1. Create repo on GitHub
  
- New > Repository name (copy from you local repo folder)
- Public
- No Readme
- No License
- Leave the default settings on everything else
  
### 2. Push local repository to new GitHub repo

- Right-click on local repo folder
- Choose "Open with 
- git remote add origin https://github.com/[username]/[repo-name].git
  
  - **#GOTCHA:** If remote already exists, just change the url with `git remote set-url <REMOTE-NAME> <NEW-URL>`
  
-  git push --set-upstream origin master
- git push origin master
  
### 3. Configure Repo

- Add .gitignore file


---
### REFERENCES:

- https://www.cloudbees.com/blog/remote-origin-already-exists-error
- 