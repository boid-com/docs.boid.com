---
id: transstake
title: Transfering stake with tokens
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

In **to** type EOS account name that you want your staked tokens transfered.

**IMPORTANT** - transtake is made to transfer already staked tokens.

If you try to transfer tokens that are not staked it may create some unforseen result. 

**REMEMBER** - You are transfering your staked tokens to another account. This is **NOT** a staking action!!!