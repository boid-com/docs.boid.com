---
id: stake
title: Stake, unstake, delegate
---
>**All Contract Actions can be used on different portals and wallets. This is just an example on bloks.io**

# Staking overview
- Staking is happening on-chain
- Staking includes the possibility for delegation and transfer staking
- Delegated tokens still appear in the token balance of the delegator
- Transfer staked tokens appear in the token balance of the delegate, who is the new
owner
- Stake claiming is now on-chain
- Stake claiming now includes the work bonus as well as the typical stake bonus
- Stake claiming also includes automatic return of expired staked tokens to token owner
- All stakes must be over the minimum stake amount at all times (100k)
- Existing stakes can be added to as long as the new stake expiration time is equal to or
greater than the existing expiration time
- Existing stakes with finite-time expirations must be unstaked all at once
- Overall staked amount valid for stake bonus is capped by the powered stake quantity of
a given account


## Staking

**Terminology**:  
*Stake - Time-locked, non-spendable token. Also the action of creating this token balance.*  
*Expiration time - Time that delegation unlocks. In stake-related functions, the `time_limit`
variable is denoted in seconds forward from current time. In the `staked` and `delegation`
tables, the `expiration_time` variable is denoted in microseconds since epoch.*

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

**Terminology:**  
**Delegate** - *Receiver of staked tokens*  
**Delegator** - *Giver of staked tokens*  
**Delegation** - *A token exchange from one balance to a staked balance. Can only be done by the
token owner*  
**Self-delegation** - *A delegation from an account’s liquid balance to its staked balance*  
**Indefinite delegation** - *A delegation that can be unlocked at any time. Useful for tokens that may
be delegated later on. Designated by an `expiration_time` of 0*  

With action **stake** still chosen. In **to** field where you type your EOS account name - change it to account name of the user you want to have your BOID tokens delegated to.
Remember about typing **quantity** in right format and **time_limit** in seconds.


## Unstake

Now we choose action called **unstake**.

![Unstake](/img/staking2.png "Unstake")

Everything is the same as in **stake** except:
* **issuer_unstake** (this option is only used by original issuer of BOID tokens)
* **transfer** (unstake tokens and transfer them to different chosen account in **to** field at the same time)


# Example stake scenarios
Stakes and transfer stakes should represent an equal-value transaction between the delegate and the delegator.

## Example 1: Stake to team leader or supernode
Stake to a Boid leader to proxy your votes or to allow them to collect bonuses for the benefit of your tribe.
![Staking Example 1](/img/staking_example_1.png "Staking Example 1")

## Example 2: Team leader transfer stake to top contributor
Transfer a staked reward to top contributors. Keep the reward locked for a period of time that seems fair.
![Staking Example 2](/img/staking_example_2.png "Staking Example 2")

## Example 3: Create a stake pool
The main difference here with example 1 is that the pool account may have more democratic permissions.
![Staking Example 3](/img/staking_example_3.png "Staking Example 3")
