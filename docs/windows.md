---
id: windows
title: Windows
sidebar_label: Windows
---
## Windows Installation

On app.boid.com when you login in Home area click on **Add more devices**

![Install Window](/img/windows_app_2.png "Install Window")

Press **Download for Windows**

It will download latest Boid Desktop Application at the moment **Boid-0.0.6.Setup.exe**
This is a 64bit package so remember that only 64bit Windows OS supports it.

Sometimes Antivirus Software may block the installation so best is to pause it for the time of the installation and when finished add exception to the antivirus and un-pause it.

It should create a Boid App Shortcut on your Desktop.

After running the program, field with username and password will appear. This is where your Boid credentials from app boid.com come in.

You can use your CPU or GPU or both. But understand that it will take some time to autoconfigure and run.

![Install Window](/img/windows_app_1.png "Install Window")


## Working Folders

Your Windows working Folder is located in your User Directory on **C** Drive

Example: ``` C:\Users\YourUser\.Boid ```

Inside there should be two folders one called **BOINC** and the other **GPU**

**BOINC** is where data regarding your CPU is located
**GPU** and as you already figured it out is data for your GPU

That's why it would be a good idea to add your **".Boid"** folder to exclusions in your Antivirus Software

## GPU software used

Software used for GPU mining depends from your hardware. Boid App uses trex or wildrig software.

**T-Rex** [T-Rex on Github](https://github.com/trexminer/T-Rex/releases)

**Wildrig** [Wildrig info on Cryptomining](https://cryptomining-blog.com/tag/wildrig-miner/) and also look here [Blog about Wildrig](https://bitcointalk.org/index.php?topic=5023676.820)


## After Install

Ok so you managed to install your Boid Desktop App and you are ready to get BOID tokens!

Look on the app look and functionality.

On the top we can see the name of the application and the version number. Make sure that you are on the latest version of the software by looking here: 
```
https://github.com/Boid-com/BoidDesktop
```

There is a home icon on the top blue part that leads you to the web portal on ```https://app.boid.com```

Next to it you should be able to see your username and a possibility to Logout from existing session and login as a different user. In addition, “My Profile” option that leads you to your user status page on ```https://app.boid.com```

Below that we have your editable device name.

Next to it a hex nut looking icon takes you to Global Settings where you can setup following options:

**Start on System Boot** - enable to launch Boid when the device is started

**Start Minimized** - when enabled Boid will not display the main window on startup. You will need to access Boid by clicking on the icon in the system tray

**Stay Awake** - when enabled Boid will attempt to keep the device from entering sleep mode. This will ensure that Boid is able to run in the background for long periods of time.

## DASH

### CPU

Control over your CPU work. Shows your Boid Power Rating for that hardware and what kind of work it is doing now (World Community Grid – working to help scientists with Cancer Research).

You can turn off and on the process by using the small green slider.

#### Hex nut icon takes you to settings where:
- You can setup how many % of your CPU will be used to process the work. Boid app automatically runs at a low priority and pauses when other applications are used (>30% CPU)
- You can “Start on Launch” – to toggle on CPU automatically when Boid app is launched.
- "Pause on Battery Power” – Extend battery life by pausing Boid when disconnected from a power source. Boid will resume when power is restored.
- “Pause on user activity” – (Resume after x minutes of inactivity) If enabled, Boid app will pause computing while mouse/keyboard is being used. Will resume after a set number of minutes of inactivity.

##### “Advanced”
- “Open BOINC Directory” – You can manually edit config files for BOINC.
- “Reset” – Removes all Boid CPU files and restarts BOID app. Files will be reinstalled on startup. You will lose progress on any Work-Units currently being worked on.

#### Green circle icon with white letter “i” in the middle – “Details” – takes you to a separate details tab with:

#####  “Active” – work units – status of the work done now. Work units require 6-12 hours to complete before Boid Power is credited. Progress is only updated in the interface hourly. You can recognise that it’s active with a blue line bar with a blue play icon (when active) or pause icon (when not active)
##### “Pending” – this is a record of work finished by your CPU but not yet validated. Each work unit will detail:
- Name of work for ex. MCM1_0153773_5241_0 and ID number
- Date, time when downloaded
- How many CPU Hours Spent on it.
- Date, time when Results were sent
- Credit - After work units are validated by the BOINC server they are assigned a credit number, which is an internal points system of BOINC, and can be calibrated on a per project basis. BOINC Credit is important because BoidPower for that WU is derived from the Credit.
- Weight - Each Work Unit is assigned a normalized float from 0 - 1 called the Weight based on the relative time that work unit was verified. For example, a Work unit which was recently completed would be assigned a weight of.9999 while a work unit that was completed three weeks ago, or near the end of the global falloff period would have a Weight near.001. Each time BoidPower needs to be calculated, the Weight is also recalculated until it reaches 0.
- Power - BoidPower for a work-unit is calculated as Credit x Weight / BOINCDIFFICULTY. Since Weight is time-relative, each time BoidPower is calculated, the result will be slightly different (lower over time). For a device to maintain or increase BoidPower, it should be completing Work Units regularly. If a device stops all contributions, it will maintain residual BoidPower for the falloff period as it trails to zero.
##### “Validated” - this is a record of work finished by your CPU and validated. Each work unit will detail:
Same as in **"Pending"**
##### “Logs” – logs about what happened in the Boid app regarding CPU work units.

### GPU
Control over your GPU work. Shows you Boid Power Rating for that hardware and what kind of work it is doing now (RVN.BOID.COM – we’re mining Ravecoin ``https://rvn.boid.com`` now)

You can turn off and on the process by using the small green slider. You can setup GPU work intensity next to it and it also shows with current GPU speed (in MH/s).

#### Hex nut icon takes you to settings where:
##### “Start on Launch” – Start GPU automatically when Boid is launched.
##### “Advanced”
##### “Open GPU Directory” – You can manually edit config files for GPU Miner apps. Look for ``config.json`` files in the ``/trex`` or ``/wildrig`` folder.
##### “Reset” – Removes all BOID GPU Files and restarts Boid. Files will be reinstalled on startup.
#### Green circle icon with white letter “i” in the middle – “Details” – takes you to a separate details tab with:
##### “Logs” - logs about what happened in the Boid app regarding GPU work units
##### “Details” – shows details of your config file for GPU work
##### “Copy Logs” – copy existing logs into clipboard

### HDD
Under development.

### Bottom Icons (starting from left)
- Logs - Boid Desktop App logs
- Discord App Boid Channel - Link: https://discordapp.com/invite/zJnRpVz
- Telegram Boid Group - Link https://t.me/Boidcom_official
- Twitter Boid Channel - Link https://twitter.com/boidcom