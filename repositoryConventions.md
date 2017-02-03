# Collaboration Conventions
Brief thoughts about how we can avoid stepping on each others' toes and hopefully avoid some of the less than pleasant issues with [Git](https://www.git-scm.com) not automatically merging changes.

## Suggesting Changes
Any new ideas/additions should be submitted as an [Issue](https://github.com/wbuchanan/sdpConvening2017/issues) so we can all hash out what the best solution would be for all involved.  

## Implementing Changes
Once a suggestion is adopted we use a new branch `suggestion#` to modify the source and then follow that with a [pull request](https://www.git-scm.com/docs/git-request-pull).  

__Important!!!__ before submitting a [pull request](https://www.git-scm.com/docs/git-request-pull) make sure your branch is up to date using [git pull](https://www.git-scm.com/docs/git-pull) or using [git rebase](https://www.git-scm.com/docs/git-rebase).  I think it would probably be good to __not__ use [git rebase](https://www.git-scm.com/docs/git-rebase) in this instance to provide newer users with a bit more information and detail about how much of the history [Git](https://www.git-scm.com) saves in a project.


## Commit Messages
Use at least two `-m` or `--message=` flags to create a "subject" and "body" for the commit message.  The "subject" should provide enough detail to be informative about what changed and the "body" can be used for additional exposition (e.g., the why something changed or the how it changed).

## Repo Ownership
@nathant23 and I were talking about this a bit.  Not sure what everyone else's thoughts are on things, but I was thinking if SDP created a GitHub account we could basically transfer ownership of the repo to SDP.  If there are thoughts on this let me know, I just put together a repository quickly to organize things.

## Presentation Materials
I've started to use [Reveal.JS](http://lab.hakim.se/reveal-js/#/) more and more for slide decks and can throw together a [gh-pages](https://pages.github.com/) branch with all the required dependencies unless it would negatively affect anyone elses work.

 

