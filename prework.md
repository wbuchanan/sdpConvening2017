# <a name="top"></a>  Session Pre Work
We want to avoid set up delays at convening as much as you do and have put together instructions to help you get [Git](https://git-scm.com) and [GitHub](https://github.com) setup on your machine.  We also have a section at the bottom of this page that explains how you can get help from us before the session.

* [Git Installation](#installInstructions)
* [GitHub Setup](#github)
* [HELP ME!!!](#helpme)


## <a name="installInstructions"></a>  Git Installation

__1. The first thing you should do is make sure you've installed [Git](https://git-scm.com) on your machine.  We've provided links for the installers for several different platforms below so you won't even need to search for things.  Just click on the link that matches your operating system and processor type below:__
  * [Windows 32-bit](https://github.com/git-for-windows/git/releases/download/v2.12.2.windows.2/Git-2.12.2.2-32-bit.exe)
  * [Windows 64-bit](https://github.com/git-for-windows/git/releases/download/v2.12.2.windows.2/Git-2.12.2.2-64-bit.exe)
  * If you are working with __OSX__ you have a couple of options:
    a. The binary from the git website for [Mac OSX](http://sourceforge.net/projects/git-osx-installer/files/git-2.10.1-intel-universal-mavericks.dmg/download?use_mirror=autoselect)
    b. If you have [Homebrew](https://brew.sh) installed you can use `brew install git` from the command line terminal to install and manage with [Homebrew](https://brew.sh)
  * If you are working on a Linux or Unix system we've copied the commands you would need below:

    _Debian/Ubuntu_ - `apt-get install git`

    _Fedora (<= version 21)_ - `yum install git`

    _Fedora (>= version 22)_ - `dnf install git`

    _Gentoo_ - `emerge --ask --verbose dev-vcs/git`

    _Arch Linux_ - `pacman -S git`

    _openSUSE_ - `zypper install git`

    _Mageia_ - `urpmi git`

    _FreeBSD_ - `pkg install git`

    _Solaris v 9-11 (requires [OpenCSW](https://www.opencsw.org/))_ - `pkgutil -i git`

    _Solaris 11 Express_ - `pkg install developer/versioning/git`

    _OpenBSD_ - `pkg_add git`

    _Alpine_ - `apk add git`

__2. If you've downloaded one of the installers, run the installer and follow the prompts on the screen.__

__3. If you're a Windows user, you'll definitely want to make sure [Git BASH](https://git-for-windows.github.io/) gets installed and may want to allow the installer to add some *nix flavored commands to `cmd.exe` to avoid having to remember *nix commands vs DOS commands.__


## <a name="github"></a>  GitHub Setup

__1. Follow this link to create a [GitHub Account](https://github.com/join?source=header-home)__

__2. There will be an option to use [two factor authentication](https://github.com/blog/1614-two-factor-authentication).  *We recommend setting this up from the beginning since it adds additional security to your account.*__

__3. Once you've created and verified your account [click here](https://github.com/wbuchanan/sdpConvening2017/blob/prework/prework.md) to get back to this page.__

__4. Fork the repository__ : 


![Fork the repository](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/forkThisRepo.png)


__It will look like this if it is working__ :


![Fork Working](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/forkWorking.png)


__5. If you're not on the prework branch already, you'll want to navigate to the pre-work branch__ :


![Branch Navigation](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/branchNavigation.png)


__6. Next, click on the link for the file named `updateThisFile.md` in your fork of the repository.__


![Prework File](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/preworkFile.png)


__7. Click on the pencil icon to edit the file__ :


![Edit File](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/editFile.png)


__8. Modify this file to let us know that you've completed the pre-work (there's only one more step to complete and it is pretty easy).  Find your name in the completed list.  It will look something like this when you are viewing the file to edit it__ :

```
- [ ] Nathan Trenholm
- [ ] Daphne Jenkins
- [ ] Jason Becker
- [ ] Billy Buchanan
```

__To indicate that you've made it this far and to see how [Git](https://git-scm.com) can help you keep track of things, you'll put the letter `x` between the square brackets next to your name like this__ :


```
- [ ] Nathan Trenholm
- [ ] Daphne Jenkins
- [ ] Jason Becker
- [x] Billy Buchanan
```

__9. Add a commit message with your name in the subject line and a message letting us know how easy - _or not_ - it was to complete the pre-work and commit the change to your repository__ :


![Commit Button and Message](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/commitChanges.png)


__If you've been successful up to this point you'll see the file that you just edited with the changes saved__ :


![Post Commit File View](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/commitedChanges.png)


__10. This is the last step...click the button to submit a pull request__ :


![Pull Request Button](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/pullRequestButton.png) 


__Depending on how your account is configured you may not see the green button indicated in the screen shot above.  In that case the screen shot below will show you where to click__ : 


![Pull Request Alt Button](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/pullRequestButtonAlt.png)


__and use this phrase for the message: `I can haz all the stickerz!`.__


![Pull Request Message](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/pullRequestMessage.png)


__11. You're done.  Congrats!  You've installed [Git](https://git-scm.com), created a [GitHub](https://github.com) account, forked a repository, modified the code base, commited the change, and submitted a pull request.__  


![SUCCESS](https://github.com/wbuchanan/sdpConvening2017/blob/prework/img/success.png)


## <a name="helpme"></a>  HELP ME!!!
You may have trouble getting things set up and it is ok.  With the possible exception of [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), everyone encounters challenges with [Git](https://git-scm.com) at some point.  So you're not alone in this and we are all here to help get you off on the right foot.

If you run into any issues with the prework [click here](https://github.com/wbuchanan/sdpConvening2017/issues/new) to ask us for help.  


