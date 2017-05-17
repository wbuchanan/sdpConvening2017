# Collaborate like a git pro

The unsung hero of using `git` and Github is communication. It's great to be able to save versions of code over time, make it easy to copy and reproduce work, and resolve conflicts when working on a project simulatenously with collaborators. But really, the best part of `git` is all the communication tools.

Each time you want to save a chunk of code into your history, you have to add those changes to the respository

```git
git add -A
```

(which adds all changes... or you can add files and directories one at a time with `git add your-filepath-here`

and commit those changes

```git
git commit -m "your commit message here"
```

and then push your code to the remote repository and branch:

```git
git push
```

Most tutorials stop here. Add all your changes, write a commit message, and push.

But I really dislike `git commit -m` because it inspires terse commit messages that often seem trivial. Good commit messages mean it's far easier to understand what a chunk of code changes are trying to accomplish, and you don't want to write those inline.

A better way to write commits is to use either:

```git
git commit -a
```

or

```git
git commit -v
```

The first, `git commit -a` combines `git add -A` and `git commit -v`, adding all changes to commit and opens up a text editor to write a verbose commit message. By default, the editor will open with a summary of the differences between the currently staged code and commited code, which can be a helpful summary of what has changed.

## Power Up Git Commit Messages in Your Organization

If you want to super power your commit messages, then I recommend setting a default template for your messages. I provided my template in `git_settings/commit_message`. To use this as your commit message, just enter the following into the command line:

```git
git config --global commit.template git_settings/commit_message
```

The file specified above can be any text file. Mine is stored in `~/.gitmessage`.

## Pull Requests on Github

Great communication starts at the level of each commit. Ideally, code reviewers should be able to step through your code a commit at a time, read the message, amd review it and understand what changes have been made. But helping out code reviewers (and our future selves) doesn't stop with commit messages.

When opening a pull request to merge one branch into another on Github. we have the ability to title the PR and write a comment or message about it. One of the best parts of using Github is the pull request review workflow. A good PR message explains what can newly be accomplished once the branch is merged and communicates clearly how to review that code. You can enforce a default PR template on Github by checking in and adding a `PULL_REQUEST_TEMPLATE.md` file in `.github` in the top level of your respository. That's where you'll find the default PR message for this repo.
