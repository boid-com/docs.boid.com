---
id: boidpower
title: Boid power mechanics
sidebar_label: Boid power mechanics
---
# Bonus parameters

## Stake difficulty
Determines stake bonus. More difficult corresponds to lower bonus. Used for
controlling inflation.

## Powered stake multiplier
Determines tokens available for bonus.

## Power difficulty
Determines power bonus. More difficult corresponds to lower bonus. Used for
controlling inflation.

## Power bonus max rate
Determines maximum payout rate for power bonus. Rate is measured
in tokens per microsecond. Anything above this rate goes to worker proposal fund.

## Min stake
Minimum amount that can be staked. A stake can never be below this amount.

## Max powered stake ratio
Maximum percentage of total staked that a single account can
have.

## Max wpf payout
Maximum amount that can be paid out to the worker proposal fund per call to
claim.

## Worker proposal fund
Amount in the worker proposal fund before it is transferred to the
worker proposal fund proxy account

## Worker proposal fund proxy
Account that holds the worker proposal fund tokens

# Boidpower parameters

## Boidpower decay rate
Rate of decay for boidpower. Causes boidpower to fall off for inactive
accounts.

## Boidpower update exp
Exponent to determine the amount that boidpower update contributes
to overall boidpower.

## Boidpower const decay
Constant decay for boidpower. Boidpower for all boid accounts falls
off by this amount every day.

# Bonus equations

## Powered stake

![Powered Stake](/img/powered_stake.png "Powered Stake")

## Stake Bonus
![Stake Bonus](/img/stake_bonus.png "Stake Bonus")

## Power Bonus
![Power Bonus](/img/power_bonus.png "Power Bonus")

## Power Equation
![Power Equation](/img/power_bonus.png "Power Equation")

# Boidpower Examples
10 test accounts were set up with initial boidpowers between [1000, 100000]. Account
boidpowers were updated regularly of the quantity (0.1*initBp*dt/day_length). Graph is
measured in days vs boidpower.
![Power Example 1](/img/power_examples_1.png "Power Example 1")
![Power Example 2](/img/power_examples_2.png "Power Example 2")
![Power Example 3](/img/power_examples_3.png "Power Example 3")
![Power Example 4](/img/power_examples_4.png "Power Example 4")
![Power Example 5](/img/power_examples_5.png "Power Example 5")

## Bonus Examples
10 test accounts were set up with initial boidpowers between **[ 1000, 1000000 ]** and initial
stakes between **[ 100000,10000000 ]** BOID. Account boidpowers were updated regularly of
the quantity (0.1*initBp*dt/day_length). Graphs are measured in days vs boidpower and
days vs bonus.

![Power Example 6](/img/power_examples_6.png "Power Example 6")
![Power Example 7](/img/power_examples_7.png "Power Example 7")
![Power Example 8](/img/power_examples_8.png "Power Example 8")
![Power Example 95](/img/power_examples_9.png "Power Example 9")
![Power Example 10](/img/power_examples_10.png "Power Example 10")