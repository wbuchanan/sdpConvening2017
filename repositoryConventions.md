# Collaboration Conventions
Brief thoughts about how we can avoid stepping on each others' toes and hopefully avoid some of the less than pleasant issues with [Git](https://www.git-scm.com) not automatically merging changes. A quick table of contents is also included for this page:

* [Suggesting Changes](#suggestions)
* [Implementing Changes](#changes)
* [Commit Messages](#commitMessages)
* [Pull Requests](#prs)
* [Repository Ownership](#ownership)
* [Presentation Materials](#presentationMaterials)


## <a name="suggestions"></a>  Suggesting Changes
Any new ideas/additions should be submitted as an [Issue](https://github.com/wbuchanan/sdpConvening2017/issues) so we can all hash out what the best solution would be for all involved.  

## <a name="changes"></a>  Implementing Changes
Following @jsonbecker's suggestion, for a change to get merged into the `master` branch the following steps would be used:

1. Create a new branch for the feature/suggestion you would like implemented.
2. Commit the change using the proposed commit template.
3. Push the commit to your fork of the repository.
4. Submit a pull request using the proposed PR Template.
5. Code gets reviewed by one of the project collaborators.
6. If there are issues the reviewer will request changes or make suggestions.  If there are no issues, the PR would be merged.


__Important!!!__ before submitting a [pull request](https://www.git-scm.com/docs/git-request-pull) make sure your branch is up to date using [git pull](https://www.git-scm.com/docs/git-pull) or using [git rebase](https://www.git-scm.com/docs/git-rebase).  I think it would probably be good to __not__ use [git rebase](https://www.git-scm.com/docs/git-rebase) in this instance to provide newer users with a bit more information and detail about how much of the history [Git](https://www.git-scm.com) saves in a project.


## <a name="commitMessages"></a>  Commit Messages
Additional information can be found in @jsonbecker's proposed changes, but as a quick reference a commit message should take on the following format:

```
Some awesome title

Why:

* ...

This change addresses the need by:

* ...
```

## <a name="prs"></a>  Pull Requests
Additional information can be found in @jsonbecker's proposed changes, but they are repeated here (with minor modification) for convenience:

### What does this PR do?
*

#### What needs to be finished before QA?
- [ ] Item

#### Where should the reviewers start?
1.

#### How should this be manually tested?
1. 

#### Any background context you want to provide?
*

#### What are the relevant tickets?
* 

#### Screenshots?
![And the dragon comes in the Niiiiiiight!!!!!](https://octodex.github.com/images/strongbadtocat.png)

#### Questions:
*



## <a name="ownership"></a>  Repository Ownership
@nathant23 and I were talking about this a bit.  Not sure what everyone else's thoughts are on things, but I was thinking if SDP created a GitHub account we could basically transfer ownership of the repo to SDP.  If there are thoughts on this let me know, I just put together a repository quickly to organize things.

## <a name="presentationMaterials"></a>  Presentation Materials
I've started to use [Reveal.JS](http://lab.hakim.se/reveal-js/#/) more and more for slide decks and can throw together a [gh-pages](https://pages.github.com/) branch with all the required dependencies unless it would negatively affect anyone elses work.  I am still working to add the footer from the template that Rebecca sent to us last week, but the title slide is fairly close to meeting the conference template.

 

