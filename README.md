# Idle-Hands

Idle Hands
..the devil’s tools.

You have an Idleness bar. Whenever it fills you ‘play’ a hand of poker and either win or lose. When you win, you get Cash. When you lose you get Salt. After you lose 6 games in a row you unlock Cheating, which gives you Sin and increases your chance of winning, but also gives you a chance to get caught which causes you to lose all your Cash. Cash is used to upgrade your Idleness bar which lets you play more and/or better hands. After you accumulate sufficient Sin you unlock the ability to summon Demons which lets you spend Sin and Salt to gain Fame.

Resources
IdlenessMax
IdlenessPerTick
Cash
Salt
Sin
ManaMax
ContractsActiveMax
ContractsProgressPerTick
ContractsAvailable

Menus
Main
Upgrades
Summoning
Magic
Contracts

Cash: 0
Salt: 0
Mana: 0
IdlenessPerTick: 100
IdlenessMax: 666
ChanceWinning: 10
ChanceWinningMax: 100
WinCash: 100
LoseSalt: 10
CashIncome: 0
ManaMax: 0
ManaPerTick: 0
ContractsActiveMax: 1
ContractsProgressPerTick: 1000
ContractsAvailable: 3

NeverGuaranteed 	| If ChanceWinning >= ChanceWinningMax set ChanceWinningMax += 1
NeverIdle 		| If IdlenessPerTick >= IdlenessMax set IdlenessMax += 1

Upgrades	Unlocked by losing 3 times in a row.
Cheat | Increase your odds of winning, at a price.
Cost: 66+(Rank-1)*(Rank*1.06)*(66) Salt
Effects | ChanceWinning toFixed(2): +(Rank^(1/40))*(40), Sin: toFixed(2): +(Rank^(1/10))*10 per win

Higher Stakes | Slower to play, but so much more cash on the line.
Cost: 10000+((Rank-1)^1.06)*10000
Effects | IdlenessMax toFixed(2): +(Rank^(1/40))*(333), WinCash +toFixed(2): +(Rank^(1/40))*(IdlenessMax)

Get Salty | Who knew the benefits of a bad temper.
Cost: 10000+((Rank-1)^1.06)*10000 Cash
Effects | LoseSalt toFixed(2): +(Rank)+(Rank^(1/40))*(9)

Big Bets | Dolla Dolla Bill Y’all
Cost: 1000000+((Rank-1)^1.06)*1000000 Cash
Effects | WinCash +toFixed(2): +(Rank^(1/40))*(10000)

Idle Hands | Are the Devil’s Plaything.
Cost: 10000+((Rank-1)^1.06)*10000 Cash
Effects | IdlenessPerTick toFixed(2): +(Rank^(1/40))*(10)
	
Investments | Takes cash to make cash.
Cost: 10000+((Rank-1)*(1.06))*(10000) Cash
Effects | CashIncome toFixed(2): +(Rank^(1/40))*(10)

	Make Pact Unlocks
Legal Consult | Finish contracts faster.
Cost: 10000+((Rank-1)^1.06)*10000 Cash
Effects | ContractsPerTick toFixed(2): *(Rank^(1/40))*(.1)

66 Sin Unlocks
Summoning Circle | A circle of salt. I’m sure you’ll find some use for it.
Cost: 100+(Rank-1)*(Rank*1.06)*(66) Salt
Effects | Unlocks Summoning, DemonMax +Rank

	Imp Unlocks
Mana2Money | Turn that excess mana into cold cash.
Cost: 10000+((Rank-1)^1.06)*10000 Cash
Effects | Excess mana turned into Cash at (Rank^(1/10))*(1)

	Imp Unlocks
Practice Magic | Make more mana faster.
Cost: Cost: 10000+((Rank-1)^1.06)*10000 Cash
Effects | ManaPerTick +(Rank^(1/10))

Warlock Unlocks
Mana2MoreMana | Turn that excess mana into more mana.
Cost: 1000000+((Rank-1)^1.06)*1000000 Cash
Effects | Excess mana turned into ManaMax at +(Rank^(1/10))*(.01)

Summoning	Unlocked by Summoning Circle.
Imp | A minor demon offers to teach you magic.
Cost: (Rank-1)*(Rank*1.06)*(66) Sin, 1 DemonMax
Effects | Unlocks Magic, Unlocks Mana, ManaMax +(Rank+9), ManaPerTick +(Rank^(1/40))

	Imp Unlocks
Warlock | A damned practitioner of the dark arts answers your call.
Cost: 666+(Rank-1)*(Rank*1.06)*(666) Sin, 1 DemonMax
Effects | MaxMana toFixed(2): +(Rank^(1/40))*(5)

Make Pack Unlocks
Lawyer | A damned practitioner of the dark arts answers your call.
Cost: 6666+(Rank-1)*(Rank*1.06)*(6666) Sin, 1 DemonMax
Effects | ContractsPerTick toFixed(2): +(Rank^(1/40))*(100)

Magic		Unlocked by Warlock.
Stack The Deck | Kinda like cheating, in that it’s cheating.
Cost: ((Rank-1)*(1.06))*(5) Mana
Effects | ChanceWinning toFixed(2): +(Rank^(1/40))*(10)

Lead to Gold | Make some money.
Cost:  ((Rank-1)*(1.06))*(5) Mana
Effects | CashIncome toFixed(2): +(Rank^(1/40))*(10)

	15 ManaMax Unlocks
Make Pact | You’ve summoned all these Demons, why not put them to better use.
Cost: (Rank^1.06)*(15) Mana
Effects | Unlocks Contracts, +(Rank)*10 ManaMax, ManaPerTick +(Rank^(1/40))

	Make Pack Unlocks
Arcane Knowledge | Finish contracts faster.
Cost: 10+((Rank-1)^1.06)*10 Mana
Effects | ContractsPerTick toFixed(2): *(Rank^(1/40))*(.1)

Contracts	Unlocked by Make Pact.
These are a little different. Randomly up to ContractsAvailable (ie. 3 to start) spawn. Contracts take a while to complete, which is impacted by ContractsProgressPerTick, but expect the initially available contracts to take 5 minutes. They give permanent bonuses to various things.

Idle Faster | SomeFlavorHere
ContractMaxProgress: 300000
Effects | IdlenessPerTick toFixed(2): +(Rank^(1/40))*(1)

Win More | SomeFlavorHere
ContractMaxProgress: 300000
Effects | ChanceWinning toFixed(2): +(Rank^(1/40))*(1)

Mana More | SomeFlavorHere
ContractMaxProgress: 300000
Effects | ManaMax toFixed(2): +(Rank^(1/40))*(10)

Mana Faster | SomeFlavorHere
ContractMaxProgress: 300000
Effects | ManaPerTick toFixed(2): +(Rank^(1/40))*(1)

Demons More | Wouldn’t you like some more demons?
ContractMaxProgress: ((Rank)^(1.06))*(300000)
Effects | DemonsMax +(Rank)

Quick Cash | Free money!
ContractMaxProgress: 300000
Effects | Cash +(Rank^(1.06))*10000

Contracts Faster | Wouldn’t you like to finish these faster?
ContractMaxProgress: ((Rank)^(1.06))*(300000)
Effects | ContractsProgressPerTick +(100)*(Rank^(1/10))
