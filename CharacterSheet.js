function SaveChar() {
    var CharName = document.getElementById("Name").value;
    var CharNickName = document.getElementById("Nickname").value;

    var Stats = [0,0,0,0,0];
    Stats[0] = document.getElementById("Edge").value;
    Stats[1] = document.getElementById("Heart").value;
    Stats[2] = document.getElementById("Iron").value;
    Stats[3] = document.getElementById("Shadow").value;
    Stats[4] = document.getElementById("Wits").value;

    var Effects = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    Effects[0] = document.getElementById("Wounded").checked;
    Effects[1] = document.getElementById("Shaken").checked;
    Effects[2] = document.getElementById("Unprepared").checked;
    Effects[3] = document.getElementById("Permenently Harmed").checked;
    Effects[4] = document.getElementById("Traumatized").checked;
    Effects[5] = document.getElementById("Doomed").checked;
    Effects[6] = document.getElementById("Tormented").checked;
    Effects[7] = document.getElementById("Indebted").checked;
    Effects[8] = document.getElementById("Battered").checked;
    Effects[9] = document.getElementById("Cursed").checked;
    Effects[10] = document.getElementById("Custom1").checked;
    Effects[11] = document.getElementById("Custom2").checked;
    Effects[12] = document.getElementById("Custom3").checked;
    var Entry1 = document.getElementById("Custom1Entry").value;
    var Entry2 = document.getElementById("Custom2Entry").value;
    var Entry3 = document.getElementById("Custom3Entry").value;

    var Health = document.querySelector("input[type='radio'][name=health]:checked").value;
    var Spirit = document.querySelector("input[type='radio'][name=spirit]:checked").value;
    var Supply = document.querySelector("input[type='radio'][name=supply]:checked").value;

    Questing = [0,0,0,0,0,0,0,0,0,0];
    QSlt = [0,0,0,0,0,0,0,0,0,0];
    QSlt[0] = document.getElementById("Qsts").querySelector("#B1");
    QSlt[1] = document.getElementById("Qsts").querySelector("#B2");
    QSlt[2] = document.getElementById("Qsts").querySelector("#B3");
    QSlt[3] = document.getElementById("Qsts").querySelector("#B4");
    QSlt[4] = document.getElementById("Qsts").querySelector("#B5");
    QSlt[5] = document.getElementById("Qsts").querySelector("#B6");
    QSlt[6] = document.getElementById("Qsts").querySelector("#B7");
    QSlt[7] = document.getElementById("Qsts").querySelector("#B8");
    QSlt[8] = document.getElementById("Qsts").querySelector("#B9");
    QSlt[9] = document.getElementById("Qsts").querySelector("#B10");

    QuestIndex = 0;
    while (QuestIndex < 10){
        QCalc = 0;
        if (QSlt[QuestIndex].querySelector("#\\31tick").checked) {
            QCalc += 1;
        }
        if (QSlt[QuestIndex].querySelector("#\\32tick").checked) {
            QCalc += 1;
        }
        if (QSlt[QuestIndex].querySelector("#\\33tick").checked) {
            QCalc += 1;
        }
        if (QSlt[QuestIndex].querySelector("#\\34tick").checked) {
            QCalc += 1;
        }
        if (QSlt[QuestIndex].querySelector("#Check1").checked) {
            QCalc += 0.5;
        }
        if (QSlt[QuestIndex].querySelector("#Check2").checked) {
            QCalc += 0.25;
        }
        Questing[QuestIndex] = QCalc;
        QuestIndex += 1;
    }

    Bonds = [0,0,0,0,0,0,0,0,0,0];
    Bond = [0,0,0,0,0,0,0,0,0,0];
    Bond[0] = document.getElementById("Bond").querySelector("#B1");
    Bond[1] = document.getElementById("Bond").querySelector("#B2");
    Bond[2] = document.getElementById("Bond").querySelector("#B3");
    Bond[3] = document.getElementById("Bond").querySelector("#B4");
    Bond[4] = document.getElementById("Bond").querySelector("#B5");
    Bond[5] = document.getElementById("Bond").querySelector("#B6");
    Bond[6] = document.getElementById("Bond").querySelector("#B7");
    Bond[7] = document.getElementById("Bond").querySelector("#B8");
    Bond[8] = document.getElementById("Bond").querySelector("#B9");
    Bond[9] = document.getElementById("Bond").querySelector("#B10");

    BondIndex = 0;
    while (BondIndex < 10){
        BCalc = 0;
        if (Bond[BondIndex].querySelector("#\\31tick").checked) {
            BCalc += 1;
        }
        if (Bond[BondIndex].querySelector("#\\32tick").checked) {
            BCalc += 1;
        }
        if (Bond[BondIndex].querySelector("#\\33tick").checked) {
            BCalc += 1;
        }
        if (Bond[BondIndex].querySelector("#\\34tick").checked) {
            BCalc += 1;
        }
        if (Bond[BondIndex].querySelector("#Check1").checked) {
            BCalc += 0.5;
        }
        if (Bond[BondIndex].querySelector("#Check2").checked) {
            BCalc += 0.25;
        }
        Bonds[BondIndex] = BCalc;
        BondIndex += 1;
    }

    Discoveries = [0,0,0,0,0,0,0,0,0,0];
    Disc = [0,0,0,0,0,0,0,0,0,0];
    Disc[0] = document.getElementById("Disc").querySelector("#B1");
    Disc[1] = document.getElementById("Disc").querySelector("#B2");
    Disc[2] = document.getElementById("Disc").querySelector("#B3");
    Disc[3] = document.getElementById("Disc").querySelector("#B4");
    Disc[4] = document.getElementById("Disc").querySelector("#B5");
    Disc[5] = document.getElementById("Disc").querySelector("#B6");
    Disc[6] = document.getElementById("Disc").querySelector("#B7");
    Disc[7] = document.getElementById("Disc").querySelector("#B8");
    Disc[8] = document.getElementById("Disc").querySelector("#B9");
    Disc[9] = document.getElementById("Disc").querySelector("#B10");

    DiscIndex = 0;
    while (DiscIndex < 10){
        BCalc = 0;
        if (Disc[DiscIndex].querySelector("#\\31tick").checked) {
            BCalc += 1;
        }
        if (Disc[DiscIndex].querySelector("#\\32tick").checked) {
            BCalc += 1;
        }
        if (Disc[DiscIndex].querySelector("#\\33tick").checked) {
            BCalc += 1;
        }
        if (Disc[DiscIndex].querySelector("#\\34tick").checked) {
            BCalc += 1;
        }
        if (Disc[DiscIndex].querySelector("#Check1").checked) {
            BCalc += 0.5;
        }
        if (Disc[DiscIndex].querySelector("#Check2").checked) {
            BCalc += 0.25;
        }
        Discoveries[DiscIndex] = BCalc;
        DiscIndex += 1;
    }

    BackgroundVow = [0,0,0,0,0,0,0,0,0,0];
    Bvow = [0,0,0,0,0,0,0,0,0,0];
    Bvow[0] = document.getElementById("Bvow").querySelector("#B1");
    Bvow[1] = document.getElementById("Bvow").querySelector("#B2");
    Bvow[2] = document.getElementById("Bvow").querySelector("#B3");
    Bvow[3] = document.getElementById("Bvow").querySelector("#B4");
    Bvow[4] = document.getElementById("Bvow").querySelector("#B5");
    Bvow[5] = document.getElementById("Bvow").querySelector("#B6");
    Bvow[6] = document.getElementById("Bvow").querySelector("#B7");
    Bvow[7] = document.getElementById("Bvow").querySelector("#B8");
    Bvow[8] = document.getElementById("Bvow").querySelector("#B9");
    Bvow[9] = document.getElementById("Bvow").querySelector("#B10");

    BvowIndex = 0;
    while (BvowIndex < 10){
        BCalc = 0;
        if (Bvow[BvowIndex].querySelector("#\\31tick").checked) {
            BCalc += 1;
        }
        if (Bvow[BvowIndex].querySelector("#\\32tick").checked) {
            BCalc += 1;
        }
        if (Bvow[BvowIndex].querySelector("#\\33tick").checked) {
            BCalc += 1;
        }
        if (Bvow[BvowIndex].querySelector("#\\34tick").checked) {
            BCalc += 1;
        }
        if (Bvow[BvowIndex].querySelector("#Check1").checked) {
            BCalc += 0.5;
        }
        if (Bvow[BvowIndex].querySelector("#Check2").checked) {
            BCalc += 0.25;
        }
        BackgroundVow[BvowIndex] = BCalc;
        BvowIndex += 1;
    }
    
    var Momentum = document.querySelector("input[type='radio'][name=momentum]:checked").value;
    var Hold = document.querySelector("input[type='radio'][name=hold]:checked").value;

    Ledger = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    LedgerIndex = 0;
    while (LedgerIndex < 20) {
        LedgerEntry = document.getElementById("ledger" + String(LedgerIndex+1)).value;
        Ledgercheckbox1 = document.getElementById("L" + String(LedgerIndex+1) + "-1").checked;
        Ledgercheckbox2 = document.getElementById("L" + String(LedgerIndex+1) + "-2").checked;
        Ledgercheckbox3 = document.getElementById("L" + String(LedgerIndex+1) + "-3").checked;
        Ledgercheckbox4 = document.getElementById("L" + String(LedgerIndex+1) + "-4").checked;
        Ledgercheckbox5 = document.getElementById("L" + String(LedgerIndex+1) + "-5").checked;
        Ledger[LedgerIndex] = [LedgerEntry,[Ledgercheckbox1,Ledgercheckbox2,Ledgercheckbox3,Ledgercheckbox4,Ledgercheckbox5]]
        LedgerIndex += 1;
    }

    Notes = document.getElementById("notes").value;

    PreppedData = {
        CharacterName: CharName,
        CharacterNickname: CharNickName,
        CharStats: Stats,
        CharEffects: Effects,
        CustEffect1: Entry1,
        CustEffect2: Entry2,
        CustEffect3: Entry3,
        Hlth: Health,
        Sply: Supply,
        Sprt: Spirit,
        QuestMeter: Questing,
        BondsMeter: Bonds,
        DiscoveriesMeter:Discoveries,
        BackgroundVowMeter:BackgroundVow,
        Mmtm: Momentum,
        Hld: Hold,
        Ldgr: Ledger,
        Nts: Notes
    }

    jsonString = JSON.stringify(PreppedData, null, 2)
    
    blob = new Blob([jsonString], { type: "application/json" });

    link = document.createElement("a");

    link.download = CharName + "_" + CharNickName + ".json"
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadURL = ["text/json", link.download, link.href].join(":");

    evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    link.dispatchEvent(evt);
    link.remove();
}

function LoadChar() {
    CharFile = document.getElementById("CharFile").files[0];

    file = 0;

    if(CharFile){
        const reader = new FileReader();
        reader.readAsText(CharFile, 'UTF-8');
        reader.onload = (evt) => {
            file = evt.target.result;
            Decrypted = JSON.parse(file);
            document.getElementById("Name").value = Decrypted.CharacterName;
            document.getElementById("Nickname").value = Decrypted.CharacterNickname;
            document.getElementById("Edge").value = Decrypted.CharStats[0];
            document.getElementById("Heart").value = Decrypted.CharStats[1];
            document.getElementById("Iron").value = Decrypted.CharStats[2];
            document.getElementById("Shadow").value = Decrypted.CharStats[3];
            document.getElementById("Wits").value = Decrypted.CharStats[4];
            document.getElementById("Wounded").checked = Decrypted.CharEffects[0];
            document.getElementById("Shaken").checked = Decrypted.CharEffects[1];
            document.getElementById("Unprepared").checked = Decrypted.CharEffects[2];
            document.getElementById("Permenently Harmed").checked = Decrypted.CharEffects[3];
            document.getElementById("Traumatized").checked = Decrypted.CharEffects[4];
            document.getElementById("Doomed").checked = Decrypted.CharEffects[5];
            document.getElementById("Tormented").checked = Decrypted.CharEffects[6];
            document.getElementById("Indebted").checked = Decrypted.CharEffects[7];
            document.getElementById("Battered").checked = Decrypted.CharEffects[9];
            document.getElementById("Cursed").checked = Decrypted.CharEffects[10];
            document.getElementById("Custom1").checked = Decrypted.CharEffects[11];
            document.getElementById("Custom2").checked = Decrypted.CharEffects[12];
            document.getElementById("Custom3").checked = Decrypted.CharEffects[13];
            document.getElementById("Custom1Entry").value = Decrypted.CustEffect1;
            document.getElementById("Custom2Entry").value = Decrypted.CustEffect2;
            document.getElementById("Custom3Entry").value = Decrypted.CustEffect3;
            document.querySelector("input[type='radio'][name=health]#\\3"+String(Decrypted.Hlth)).checked = true;
            document.querySelector("input[type='radio'][name=spirit]#\\3"+String(Decrypted.Sprt)).checked = true;
            document.querySelector("input[type='radio'][name=supply]#\\3"+String(Decrypted.Sply)).checked = true;
            document.querySelector("input[type='radio'][name=momentum]#\\"+String(Decrypted.Mmtm)).checked = true;
            document.querySelector("input[type='radio'][name=hold]#\\3"+String(Decrypted.Hld)).checked = true;
            document.getElementById("notes").value = Decrypted.Nts;
            LedgerIndex = 0;
            while (LedgerIndex < 20) {
                document.getElementById("ledger" + String(LedgerIndex+1)).value = Decrypted.Ldgr[LedgerIndex][0];
                document.getElementById("L" + String(LedgerIndex+1) + "-1").checked = Decrypted.Ldgr[LedgerIndex][1][0];
                document.getElementById("L" + String(LedgerIndex+1) + "-2").checked = Decrypted.Ldgr[LedgerIndex][1][1];
                document.getElementById("L" + String(LedgerIndex+1) + "-3").checked = Decrypted.Ldgr[LedgerIndex][1][2];
                document.getElementById("L" + String(LedgerIndex+1) + "-4").checked = Decrypted.Ldgr[LedgerIndex][1][3];
                document.getElementById("L" + String(LedgerIndex+1) + "-5").checked = Decrypted.Ldgr[LedgerIndex][1][4];
                LedgerIndex += 1;
            }

            QuestIndex = 0;
            while (QuestIndex < 10){
                QCalc = Decrypted.QuestMeter[QuestIndex];
                if (QCalc >= 1) {
                    QCalc -= 1;
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\31tick").checked = true;
                } else {
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\31tick").checked = false;
                }

                if (QCalc >= 1) {
                    QCalc -= 1;
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\32tick").checked = true;
                } else {
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\32tick").checked = false;
                }

                if (QCalc >= 1) {
                    QCalc -= 1;
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\33tick").checked = true;
                } else {
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\33tick").checked = false;
                }

                if (QCalc >= 1) {
                    QCalc -= 1;
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\34tick").checked = true;
                } else {
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#\\34tick").checked = false;
                }

                if (QCalc - 0.5 >= 0) {
                    QCalc -= 0.5;
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#Check1").checked = true;
                } else {
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#Check1").checked = false;
                }

                if (QCalc - 0.25 >= 0) {
                    QCalc += 0.25;
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#Check2").checked = true;
                } else {
                    document.getElementById("Qsts").querySelector("#B"+String(QuestIndex+1)).querySelector("#Check2").checked = false;
                }
                QuestIndex += 1;
            }

            BondIndex = 0;
            while (BondIndex < 10){
                BCalc = Decrypted.BondsMeter[BondIndex];
                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\31tick").checked = true;
                } else {
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\31tick").checked = false;
                }

                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\32tick").checked = true;
                } else {
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\32tick").checked = false;
                }

                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\33tick").checked = true;
                } else {
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\33tick").checked = false;
                }

                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\34tick").checked = true;
                } else {
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#\\34tick").checked = false;
                }

                if (BCalc - 0.5 >= 0) {
                    BCalc -= 0.5;
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#Check1").checked = true;
                } else {
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#Check1").checked = false;
                }
                
                if (BCalc - 0.25 >= 0) {
                    BCalc += 0.25;
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#Check2").checked = true;
                } else {
                    document.getElementById("Bond").querySelector("#B"+String(BondIndex+1)).querySelector("#Check2").checked = false;
                }
                BondIndex += 1;
            }

            DiscIndex = 0;
            while (DiscIndex < 10){
                DCalc = Decrypted.DiscoveriesMeter[DiscIndex];
                if (DCalc >= 1) {
                    DCalc -= 1;
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\31tick").checked = true;
                } else {
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\31tick").checked = false;
                }

                if (DCalc >= 1) {
                    DCalc -= 1;
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\32tick").checked = true;
                } else {
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\32tick").checked = false;
                }

                if (DCalc >= 1) {
                    DCalc -= 1;
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\33tick").checked = true;
                } else {
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\33tick").checked = false;
                }
                
                if (DCalc >= 1) {
                    DCalc -= 1;
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\34tick").checked = true;
                } else {
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#\\34tick").checked = false;
                }

                if (DCalc - 0.5 >= 0) {
                    DCalc -= 0.5;
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#Check1").checked = true;
                } else {
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#Check1").checked = false;
                }

                if (DCalc - 0.25 >= 0) {
                    DCalc += 0.25;
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#Check2").checked = true;
                } else {
                    document.getElementById("Disc").querySelector("#B"+String(DiscIndex+1)).querySelector("#Check2").checked = false;
                }
                DiscIndex += 1;
            }

            BvowIndex = 0;
            while (BvowIndex < 10){
                BCalc = Decrypted.BackgroundVowMeter[BvowIndex];
                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\31tick").checked = true;
                } else {
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\31tick").checked = false;
                }

                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\32tick").checked = true;
                } else {
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\32tick").checked = false;
                }

                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\33tick").checked = true;
                } else {
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\33tick").checked = false;
                }

                if (BCalc >= 1) {
                    BCalc -= 1;
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\34tick").checked = true;
                } else {
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#\\34tick").checked = false;
                }

                if (BCalc - 0.5 >= 0) {
                    BCalc -= 0.5;
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#Check1").checked = true;
                } else {
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#Check1").checked = false;
                }

                if (BCalc - 0.25 >= 0) {
                    BCalc += 0.25;
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#Check2").checked = true;
                } else {
                    document.getElementById("Bvow").querySelector("#B"+String(BvowIndex+1)).querySelector("#Check2").checked = false;
                }
                BvowIndex += 1;
            }
        };
        reader.onerror = (evt) => {
            console.error("Failed to read this file")
        };
    }

}