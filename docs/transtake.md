---
id: transstake
title: Transfer tokens and stake
---
>**All Contract Actions can be used on different portals and wallets. This is just an example on bloks.io**

## Transfer stake with tokens

**Terminology:** *Transfer delegation - A stake where tokens change ownership. Designated by the `transtake()`
action or the `transfer` switch.*

If you want to transfer your existing staked tokens to another account use **transtake** option - on blocks.io go here:
```
https://bloks.io/account/boidcomtoken?loadContract=true&tab=Actions&account=boidcomtoken&scope=boidcomtoken&limit=100&table=stakes&action=transtake
```
![Transtake](/img/transtake.png "Transfer Stake")

**transtake** contract action needs to be chosen

In **from** type you EOS account name

In **to** type EOS account name that you want your staked tokens transferred.

>**IMPORTANT** - you can only use transtake action with unstaked tokens.

If you try to transfer tokens that are not staked it may create some unforseen result. 

**REMEMBER** - You are transferring your staked tokens to another account. This is **NOT** a staking action!!!

After you've completed your **transtake** action, account to which tokens where send to, need to unstake those tokens to take full control of them.  
Unstake action need to be done in a specific way.  
In **from** type you EOS account name from which tokens where sent from  
In **to** type your EOS account name  
**transfer** option needs to be active

>**IMPORTANT** If you don't unstake tokens which are transtaked to you, you won't be able to transfer them anywhere else.