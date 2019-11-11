---
id: stake
title: Staking, unstaking and delegating Stake
---
**All Contract Actions can be used on different portals and wallets. This is just an example on bloks.io**

## Staking

If you want to **stake** to yourself on blocks.io go here:
```
https://bloks.io/account/boidcomtoken?loadContract=true&tab=Actions&account=boidcomtoken&scope=boidcomtoken&limit=100&table=stakes&action=stake 
```
![Self Stake](/img/staking1.png "Self Stake")

As you can see from the **Select Action** area - **stake** is chosen.

Fields **from** and **to** is where you type your name of your EOS account.

**quantity** is number of BOID you want to stake in this format: **x.0000 BOID** (always 4 digits! where x is the number of BOID tokens to stake)

**time_limit** is counted in **seconds(!)** and when you type **0** it will mean unlimited time until you use unstake option.
If you make a mistake with the number of seconds you may even lock your BOID tokens for 100 years!!! So don't make a mistake!!!
**use_staked_balance** - when you tick this option it will use your staked BOID tokens and stake them to chosen account.

**Submit transaction**

Remember if you have issues with your **CPU** you can use free **TX** option on **blocks.io**


## Delegating Stake

With action **stake** still chosen. In **to** field where you type your EOS account name - change it to account name of the user you want to have your BOID tokens delegated to.
Remember about typing **quantity** in right format and **time_limit** in seconds.


## Unstake

Now we choose action called **unstake**.

![Unstake](/img/staking2.png "Unstake")

Everything is the same as in **stake** except:
* **issuer_unstake** (this option is only used by original issuer of BOID tokens)
* **transfer** (unstake tokens and transfer them to different chosen account in **to** field at the same time)