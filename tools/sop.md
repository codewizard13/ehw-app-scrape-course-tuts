<link href="../style.css" rel="stylesheet"></link>

# COURSE NOTES

<h3 class="course-title">React: Design Patterns (2017)</h3>

## TUTORIAL INFO

| Course:         | React: Design Patterns                         |
| --------------- | ---------------------------------------------- |
| Platform:       | LinkedIn Learning                              |
| Instructor:     | Shaun Wassell                                  |
| Release Date:   | Aug 27, 2017                                   |
| Date Started:   | 08/12/22                                       |
| Last Modified:  | 02/01/22                                       |
| Date Completed: | ***N/A***                                      |
| File Name:      | EHD_VIDNOT_20220812_LL_ReactDesPatt__WIP_01.md |

---

Standard Operating Procedure (SOP) for: Preparing and Publishing Course/Tutorial Notes & Tutwrk to GitHub

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