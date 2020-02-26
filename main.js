//Fix Contracts. Need to increment contract progress!!!

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
    WinCash: 100,
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
    Mana: 0,
    ManaMax: 0,
    ManaPerTick: 0,
    StackTheDeckRank: 0,
    MakePactRank: 0,
    ContractProgress: 0,
    IdleContractRank: 0,
    ManaMoreContractRank: 0,
    ManaFasterContractRank: 0,
    IdleContractActive: 0,
    ContractProgressPT: 1000,
    Contract1R: 3,
    Contract2R: 2,
    Contract3R: 1,
}

function Idle() {
    //This increments your core resource: Idleness. When you accumulate enough it triggers the primary income system: Poker.
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
    //This is almost definitely wrong.
  return Math.floor(Math.random() * Math.floor(gameData.ChanceWinningMax));
}

function Poker() {
    //The other core game loop. Gives you Cash/Salt to start and eventually Sin as well. Might eventually have more uses idk.
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
    //This is a yikes.
    //It makes your numbers bigger and gives you other numbers to make bigger.
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
    //Make different numbers bigger.
    //I don't think Imp is in a good place yet. It probably doesn't do enough.
    //Warlock is going to do what Imp originally did, unlock the Magic feature. 
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

function Magic() {
    document.getElementById("MainMenu").style.display = "none"
    document.getElementById("MagicMenu").style.display = "inline"
    document.getElementById("Mana2").innerHTML = gameData.Mana.toFixed() + " / " + gameData.ManaMax.toFixed() + " Mana"
    if(gameData.Mana >= (5 + ((gameData.StackTheDeckRank) * (1.06))).toFixed()) {
        document.getElementById("StackTheDeck").disabled = false
    } else {
        document.getElementById("StackTheDeck").disabled = true
    }
    if(gameData.Mana >= (15 + ((gameData.MakePactRank) * (1.06) * 5))) {
        document.getElementById("MakePact").disabled = false
    } else {
        document.getElementById("MakePact").disabled = true
    }
}

function Contracts() {
    document.getElementById("MainMenu").style.display = "none"
    document.getElementById("ContractsMenu").style.display = "inline"  
}

function Contract1() {
    gameData.ContractProgress = 0
    gameData.IdleContractActive = 1
    switch (gameData.Contract1R) {
        case 1: 
            document.getElementById("ActiveContract").innerHTML = "Idle Faster"
        break;
        case 2:
            document.getElementById("ActiveContract").innerHTML = "Mana More"
        break;
        case 3:
            document.getElementById("ActiveContract").innerHTML = "Mana Faster"
        break;
        default:
            document.getElementById("ActiveContract").innerHTML = "BUGGED"
    }
    DisableContracts()
}

function Contract2() {
    gameData.ContractProgress = 0
    gameData.IdleContractActive = 1
    switch (gameData.Contract2R) {
        case 1: 
            document.getElementById("ActiveContract").innerHTML = "Idle Faster"
        break;
        case 2:
            document.getElementById("ActiveContract").innerHTML = "Mana More"
        break;
        case 3:
            document.getElementById("ActiveContract").innerHTML = "Mana Faster"
        break;
        default:
            document.getElementById("ActiveContract").innerHTML = "BUGGED"
    }
    DisableContracts()
}

function Contract3() {
    gameData.ContractProgress = 0
    gameData.IdleContractActive = 1
    switch (gameData.Contract3R) {
        case 1: 
            document.getElementById("ActiveContract").innerHTML = "Idle Faster"
        break;
        case 2:
            document.getElementById("ActiveContract").innerHTML = "Mana More"
        break;
        case 3:
            document.getElementById("ActiveContract").innerHTML = "Mana Faster"
        break;
        default:
            document.getElementById("ActiveContract").innerHTML = "BUGGED"
    }
    DisableContracts()
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
    gameData.Salt -= (50+(((gameData.SummoningCircleRank)*1.06)*(50)))
    document.getElementById("Salt").innerHTML = gameData.Salt.toFixed() + " Salt"
    gameData.SummoningCircleRank += 1
    document.getElementById("SummoningCircleRankCost").innerHTML = (50+(((gameData.SummoningCircleRank)*1.06)*(50))).toFixed() + " Salt"
}

function DemonMax() {
    gameData.DemonCurrent = ((gameData.ImpRank) + (gameData.WarlockRank))
    gameData.DemonMax = ((gameData.SummoningCircleRank) - (gameData.DemonCurrent))
    document.getElementById("DemonsAvailable").innerHTML = gameData.DemonMax + " Circles for Demons."
}

function ManaPerTick() {
    gameData.ManaPerTick = (1 * (1.1*(Math.pow(gameData.WarlockRank, 0.5))))
    gameData.ManaMax = ((Math.pow((gameData.MakePactRank +1), .5)) * (5 + (5 * gameData.WarlockRank)))
}

function StackTheDeck() {
    gameData.Mana -= (5 + ((gameData.StackTheDeckRank) * (1.06)))
    document.getElementById("Mana").innerHTML = gameData.Mana + " / " + gameData.ManaMax + " Mana"
    gameData.StackTheDeckRank += 1
    document.getElementById("StackTheDeckRankCost").innerHTML = (5 + ((gameData.StackTheDeckRank) * (1.06))).toFixed() + " Mana"
}

function MakePact() {
    gameData.Mana -= (15 + ((gameData.MakePactRank) * (1.06) * 5))
    document.getElementById("Mana").innerHTML = gameData.Mana + " / " + gameData.ManaMax + " Mana"
    gameData.MakePactRank += 1
    document.getElementById("MakePactRankCost").innerHTML = "Cost: " (15 + ((gameData.MakePactRank) * (1.06) * 5)) + " Mana"
}

function ManaRefresh() {
    ManaPerTick()
    if (gameData.Mana + gameData.ManaPerTick <= gameData.ManaMax) {
    gameData.Mana += gameData.ManaPerTick
    }
    else {
    gameData.Mana = gameData.ManaMax
    // This is where overflow mana command will go once I code the ability in.
    }
    document.getElementById("Mana").innerHTML = gameData.Mana.toFixed() + " / " + gameData.ManaMax.toFixed() + " Mana"
    document.getElementById("Mana2").innerHTML = gameData.Mana.toFixed() + " / " + gameData.ManaMax.toFixed() + " Mana"
}

function ChanceWinning() {
    return (Math.pow(gameData.StackTheDeckRank + 1, 0.1) * ((gameData.ChanceWinning + ((Math.pow(gameData.CheatRank, 0.025))*(40)) + (Math.pow(gameData.ImpRank, 0.025))*(5)))).toFixed();
}

function PokerWin() {
    gameData.WinCash = (100 + ((Math.pow(gameData.HigherStakesRank, 0.025))*(100)) + ((Math.pow(gameData.BigBetsRank, 0.025))*(gameData.IdlenessMax)))
}

function IdlenessPerTick() {
    gameData.IdlenessPerTick = (100 + ((Math.pow(gameData.IdleHandsRank, 0.025))*(10)) + (Math.pow(gameData.IdleContractRank, 0.1)*10))
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
    document.getElementById("MagicMenu").style.display = "none"
    document.getElementById("ContractsMenu").style.display = "none"
    document.getElementById("MainMenu").style.display = "inline"
}

function ContractProgressPT() {
    gameData.ContractProgressPT = 1000
}

function NewContracts() {
    document.getElementById("Contract1Button").disabled = false
    document.getElementById("Contract2Button").disabled = false
    document.getElementById("Contract3Button").disabled = false
    RandomizeContracts()    
}

function shuffleContracts(array) {
        for (let i = (array.length - 1); i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

function RandomizeContracts() {
    var ContractOptions = [3, 2, 1]
    shuffleContracts(ContractOptions)
    gameData.Contract1R = ContractOptions.pop(0)
    gameData.Contract2R = ContractOptions.pop(1)
    gameData.Contract3R = ContractOptions.pop(2)

    switch(gameData.Contract1R) {
        case 1:
            document.getElementById("Contract1").innerHTML = "Idle Faster"
            document.getElementById("Contract1").title = "Blood for idleness."
            break;
        case 2:
            document.getElementById("Contract1").innerHTML = "Mana More"
            document.getElementById("Contract1").title = "Blood for more mana"
            break;
        case 3:
            document.getElementById("Contract1").innerHTML = "Mana Faster"
            document.getElementById("Contract1").title = "Blood for faster mana"
            break;
        default:
            document.getElementById("Contract1").innerHTML = "Bugged"
    }
    switch(gameData.Contract2R) {
        case 1:
            document.getElementById("Contract2").innerHTML = "Idle Faster"
            document.getElementById("Contract2").title = "Blood for idleness."
            break;
        case 2:
            document.getElementById("Contract2").innerHTML = "Mana More"
            document.getElementById("Contract2").title = "Blood for more mana"
            break;
        case 3:
            document.getElementById("Contract2").innerHTML = "Mana Faster"
            document.getElementById("Contract2").title = "Blood for faster mana"
            break;
        default:
            document.getElementById("Contract2").innerHTML = "Bugged"
    }
    switch(gameData.Contract3R) {
        case 1:
            document.getElementById("Contract3").innerHTML = "Idle Faster"
            document.getElementById("Contract3").title = "Blood for idleness."
            break;
        case 2:
            document.getElementById("Contract3").innerHTML = "Mana More"
            document.getElementById("Contract3").title = "Blood for more mana"
            break;
        case 3:
            document.getElementById("Contract3").innerHTML = "Mana Faster"
            document.getElementById("Contract3").title = "Blood for faster mana"
            break;
        default:
            document.getElementById("Contract3").innerHTML = "Bugged"
    }
}

function ContractLoop() {
    ContractProgressPT()
    gameData.ContractProgress += gameData.ContractProgressPT
    switch (document.getElementById("ActiveContract").innerHTML) {
        case "Idle Faster": 
            if ((gameData.ContractProgress >= 300000)) { 
            gameData.IdleContractActive = 0
            document.getElementById("ActiveContract").innerHTML = "Active Contract"
            gameData.IdleContractRank += 1
            document.getElementById("ActiveContract").title = "Sign here, here, and here."
            NewContracts()
        }
        break;
        case "Mana More":
        if ((gameData.ContractProgress >= 300000)){ 
            gameData.IdleContractActive = 0
            document.getElementById("ActiveContract").innerHTML = "Active Contract"
            gameData.ManaMoreContractRank += 1
            document.getElementById("ActiveContract").title = "Sign here, here, and here."
            NewContracts()
        }
        break;
        case "Mana Faster":
            if ((gameData.ContractProgress >= 300000)){
            gameData.IdleContractActive = 0
            document.getElementById("ActiveContract").innerHTML = "Active Contract"
            gameData.ManaFasterContractRank += 1
            document.getElementById("ActiveContract").title = "Sign here, here, and here."
            NewContracts()
        }
        default:
            document.getElementById("ActiveContract").title = ((gameData.ContractProgress / 300000) * 100).toFixed() + "% Progress"
    }
}


function DisableContracts() {
    document.getElementById("Contract1Button").disabled = true
    document.getElementById("Contract2Button").disabled = true
    document.getElementById("Contract3Button").disabled = true
}
    
var MainGameLoop = window.setInterval(function() {
    Idle()
    if (gameData.MakePactRank >= 1){
        ContractLoop()
        document.getElementById("ContractsMenuShow").style.display = "inline"
    }
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
        document.getElementById("MagicMenuShow").style.display = "inline"
        document.getElementById("MagicUnlock").style.display = "inline"
        ManaRefresh()
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
    if (gameData.Mana >= (5 + ((gameData.StackTheDeckRank) * (1.06))).toFixed()) {
        document.getElementById("StackTheDeck").disabled = false
    } else {
        document.getElementById("StackTheDeck").disabled = true
    }
    if(gameData.Mana >= (15 + ((gameData.MakePactRank) * (1.06) * 5))) {
        document.getElementById("MakePact").disabled = false
    } else {
        document.getElementById("MakePact").disabled = true
    }
}, 20)