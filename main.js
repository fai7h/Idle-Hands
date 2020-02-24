var gameData = {
    Cash: 0,
    Salt: 0,
    Mana: 0,
    Sin: 0,
    Idleness: 0,
    IdlenessPerTick: 100,
    IdlenessMax: 666,
    ChanceWinning: 10,
    ChanceWinningMax: 100,
    WinCash: 100.1,
    LoseSalt: 10,
    CashIncome: 0,
    ManaMax: 0,
    ManaPerTick: 0,
    ContractsActiveMax: 1,
    ContractsProgressPerTick: 1000,
    ContractsAvailable: 3,
    LossStreak: 0,
    CheatRank: 0,
    HigherStakesRank: 0,
    BigBetsRank: 0,
    IdleHandsRank: 0,
    SummoningCircleRank: 0,
    DemonMax: 0,
    DemonCurrent: 0,
    ImpRank: 0,
    WarlockRank: 0,
    GetSaltyRank: 0,
}

function Idle() {
    IdlenessPerTick()
    gameData.Idleness += gameData.IdlenessPerTick
    IdlenessMax()
    if (gameData.Idleness >= gameData.IdlenessMax) {
    Poker()
    gameData.Idleness -= gameData.IdlenessMax
    }
    document.getElementById("Idleness").innerHTML = gameData.Idleness.toFixed() + " / " + gameData.IdlenessMax + " Idleness"
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(gameData.ChanceWinningMax));
}

function Poker() {
    if (getRandomInt() <= ChanceWinning()) {
        PokerWin()
        gameData.Cash += gameData.WinCash
        gameData.Sin += ((Math.pow(gameData.CheatRank, 0.1))*10)
        document.getElementById("PokerResult").innerHTML = "You won! Here's " + gameData.WinCash.toFixed() + " Cash." 
        gameData.LossStreak = 0
    }
    else {
        PokerLoss()
        gameData.Salt += gameData.LoseSalt
        document.getElementById("PokerResult").innerHTML = "You lost. Here's " + gameData.LoseSalt.toFixed() + " Salt."
        gameData.LossStreak += 1
    }
    document.getElementById("Cash").innerHTML = gameData.Cash.toFixed() + " Cash"
    document.getElementById("Salt").innerHTML = gameData.Salt.toFixed() + " Salt"
    if (gameData.Sin >= 1) {
            document.getElementById("SinUnlock").style.display = "inline"
            document.getElementById("Sin").innerHTML = gameData.Sin.toFixed() + " Sin"
    }
}

function Upgrade() {
    document.getElementById("MainMenu").style.display = "none"
    document.getElementById("UpgradeMenu").style.display = "inline"
    if(gameData.Salt >= (((gameData.CheatRank)*1.06)*(66))) {
        document.getElementById("Cheat").disabled = false
    } else {
        document.getElementById("Cheat").disabled = true
    }
    if(gameData.Cash >= (100+(((gameData.HigherStakesRank)*1.06)*(100)))) {
        document.getElementById("HigherStakes").disabled = false
    } else {
        document.getElementById("HigherStakes").disabled = true
    }
    if(gameData.Cash >= (500+(((gameData.BigBetsRank)*1.06)*(100)))) {
        document.getElementById("BigBets").disabled = false
    } else {
        document.getElementById("BigBets").disabled = true
    }
    if(gameData.Cash >= (1000+(((gameData.IdleHandsRank)*1.06)*(100)))) {
        document.getElementById("IdleHands").disabled = false
    } else {
        document.getElementById("IdleHands").disabled = true
    }
    if(gameData.Cash >= (100+(((gameData.GetSaltyRank)*1.06)*(100)))) {
        document.getElementById("GetSalty").disabled = false
    } else {
        document.getElementById("GetSalty").disabled = true
    }
    if(gameData.Salt >= (50 + (((gameData.SummoningCircleRank)*1.06)*(50)))) {
        document.getElementById("SummoningCircle").disabled = false
    } else {
        document.getElementById("SummoningCircle").disabled = true
    }
}

function Summoning() {
    document.getElementById("MainMenu").style.display = "none"
    document.getElementById("SummoningMenu").style.display = "inline"
    if((gameData.Sin >= (((gameData.ImpRank)*1.06)*(66))) && (gameData.DemonMax >= 1)) {
        document.getElementById("Imp").disabled = false
    } else {
        document.getElementById("Imp").disabled = true
    }
    if ((gameData.Sin >= (((66)+((gameData.WarlockRank)*1.06)*(66)))) && (gameData.DemonMax >= 1)) {
        document.getElementById("Warlock").disabled = false
    } else {
        document.getElementById("Warlock").disabled = true
    }
}

function Imp() {
    gameData.Sin -= (((gameData.ImpRank)*1.06)*(66))
    document.getElementById("Sin").innerHTML = gameData.Sin.toFixed() + " Sin"
    gameData.ImpRank += 1
    document.getElementById("ImpRankCost").innerHTML = (((gameData.ImpRank)*1.06)*(66)).toFixed() + " Sin"
}

function Warlock() {
    gameData.Sin -= ((66)+((gameData.WarlockRank)*1.06)*(66))
    document.getElementById("Sin").innerHTML = gameData.Sin.toFixed() + " Sin"
    gameData.WarlockRank += 1
    document.getElementById("WarlockRankCost").innerHTML = ((66) + ((gameData.WarlockRank)*1.06)*(66)).toFixed() + " Sin"
}

function Cheat() {
    gameData.Salt -= (((gameData.CheatRank)*1.06)*(66))
    document.getElementById("Salt").innerHTML = gameData.Salt.toFixed() + " Salt"
    gameData.CheatRank += 1
    document.getElementById("CheatRankCost").innerHTML = (((gameData.CheatRank)*1.06)*(66)).toFixed() + " Salt"
}

function HigherStakes() {
    gameData.Cash -= (100+(((gameData.HigherStakesRank)*1.06)*(100)))
    document.getElementById("Cash").innerHTML = gameData.Cash.toFixed() + " Cash"
    gameData.HigherStakesRank += 1
    document.getElementById("HigherStakesRankCost").innerHTML = (100+(((gameData.HigherStakesRank)*1.06)*(100))).toFixed() + " Cash"
}

function GetSalty() {
    gameData.Cash -= (100+(((gameData.GetSaltyRank)*1.06)*(100)))
    document.getElementById("Cash").innerHTML = gameData.Cash.toFixed() + " Cash"
    gameData.GetSaltyRank += 1
    document.getElementById("GetSaltyRankCost").innerHTML = (100+(((gameData.GetSaltyRank)*1.06)*(100))).toFixed() + " Cash"
}

function BigBets() {
    gameData.Cash -= (500+(((gameData.BigBetsRank)*1.06)*(100)))
    document.getElementById("Cash").innerHTML = gameData.Cash.toFixed() + " Cash"
    gameData.BigBetsRank += 1
    document.getElementById("BigBetsRankCost").innerHTML = (500+(((gameData.BigBetsRank)*1.06)*(100))).toFixed() + " Cash"
}

function IdleHands() {
    gameData.Cash -= (1000+(((gameData.IdleHandsRank)*1.06)*(100)))
    document.getElementById("Cash").innerHTML = gameData.Cash.toFixed() + " Cash"
    gameData.IdleHandsRank += 1
    document.getElementById("IdleHandsRankCost").innerHTML = (1000+(((gameData.IdleHandsRank)*1.06)*(100))).toFixed() + " Cash"
}

function SummoningCircle() {
    gameData.Salt -= (100+(((gameData.SummoningCircleRank)*1.06)*(100)))
    document.getElementById("Salt").innerHTML = gameData.Salt.toFixed() + " Salt"
    gameData.SummoningCircleRank += 1
    document.getElementById("SummoningCircleRankCost").innerHTML = (100+(((gameData.SummoningCircleRank)*1.06)*(100))).toFixed() + " Salt"
}

function DemonMax() {
    gameData.DemonCurrent = ((gameData.ImpRank) + (gameData.WarlockRank))
    gameData.DemonMax = ((gameData.SummoningCircleRank) - (gameData.DemonCurrent))
    document.getElementById("DemonsAvailable").innerHTML = gameData.DemonMax + " Circles for Demons."
}

function ChanceWinning() {
    return ((gameData.ChanceWinning + ((Math.pow(gameData.CheatRank, 0.025))*(40)) + (Math.pow(gameData.ImpRank, 0.025))*(5))).toFixed();
}

function PokerWin() {
    gameData.WinCash = (100 + ((Math.pow(gameData.HigherStakesRank, 0.025))*(100)) + ((Math.pow(gameData.BigBetsRank, 0.025))*(gameData.IdlenessMax)))
}

function IdlenessPerTick() {
    gameData.IdlenessPerTick = (100 + ((Math.pow(gameData.IdleHandsRank, 0.025))*(10)))
}

function IdlenessMax() {
    gameData.IdlenessMax = (666 + (Math.pow(gameData.BigBetsRank, 0.025))*(333)).toFixed()
}

function PokerLoss() {
    gameData.LoseSalt = ((10) * (Math.pow(gameData.GetSaltyRank + 1, 0.1)))
}
           
function ReturnMainMenu() {
    document.getElementById("UpgradeMenu").style.display = "none"
    document.getElementById("SummoningMenu").style.display = "none"
    document.getElementById("MainMenu").style.display = "inline"
}

var MainGameLoop = window.setInterval(function() {
    Idle()
    if (gameData.LossStreak >= 3) {
        document.getElementById("UpgradeMenuShow").style.display = "inline"
    }
    if (gameData.Sin >= 66) {
        document.getElementById("SummoningCircle").style.display = "inline"
    }
    if (gameData.SummoningCircleRank >= 1) {
        document.getElementById("SummoningMenuShow").style.display = "inline"
    }
    if (gameData.ImpRank >= 1) {
        document.getElementById("Warlock").style.display = "inline"
    }
    if (gameData.WarlockRank >= 1) {
        document.getElementById("Magic").style.display = "inline"
        document.getElementById("MagicUnlock").style.display = "inline"
    }
}, 1000)

var UnlockLoop = window.setInterval(function() {
    DemonMax()
    document.getElementById("Cash").innerHTML = gameData.Cash.toFixed() + " Cash"
    document.getElementById("Salt").innerHTML = gameData.Salt.toFixed() + " Salt"
    if (gameData.Sin >= 1) {
            document.getElementById("SinUnlock").style.display = "inline"
            document.getElementById("Sin").innerHTML = gameData.Sin.toFixed() + " Sin"
    }
    if(gameData.Salt >= (((gameData.CheatRank)*1.06)*(66))) {
        document.getElementById("Cheat").disabled = false
    } else {
        document.getElementById("Cheat").disabled = true
    }
    if(gameData.Cash >= (100+(((gameData.HigherStakesRank)*1.06)*(100)))) {
        document.getElementById("HigherStakes").disabled = false
    } else {
        document.getElementById("HigherStakes").disabled = true
    }
    if(gameData.Cash >= (500+(((gameData.BigBetsRank)*1.06)*(100)))) {
        document.getElementById("BigBets").disabled = false
    } else {
        document.getElementById("BigBets").disabled = true
    }
    if(gameData.Cash >= (1000+(((gameData.IdleHandsRank)*1.06)*(100)))) {
        document.getElementById("IdleHands").disabled = false
    } else {
        document.getElementById("IdleHands").disabled = true
    }
    if(gameData.Cash >= (100+(((gameData.GetSaltyRank)*1.06)*(100)))) {
        document.getElementById("GetSalty").disabled = false
    } else {
        document.getElementById("GetSalty").disabled = true
    }
    if(gameData.Salt >= (50 + (((gameData.SummoningCircleRank)*1.06)*(50)))) {
        document.getElementById("SummoningCircle").disabled = false
    } else {
        document.getElementById("SummoningCircle").disabled = true
    }
    if((gameData.Sin >= (((gameData.ImpRank)*1.06)*(66))) && (gameData.DemonMax >= 1)) {
        document.getElementById("Imp").disabled = false
    } else {
        document.getElementById("Imp").disabled = true
    }
    if ((gameData.Sin >= (((66)+((gameData.WarlockRank)*1.06)*(66)))) && (gameData.DemonMax >= 1)) {
        document.getElementById("Warlock").disabled = false
    } else {
        document.getElementById("Warlock").disabled = true
    }
}, 20)