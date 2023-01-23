function hanySzinKeverheto(szinek) {

    for(let i = 0; i < szinek.length; i++) {
        if(typeof szinek[i] !== "string") {
            console.log("Hiba! Az egyik elem nem string.")
            return 0;
        }
    }

    for(let i = 0; i < szinek.length; i++) {
        if(szinek[i] !== "piros" && szinek[i] !== "zöld" && szinek[i] !== "kék") {
            console.log("Hiba! Csak a tömbben szereplő alapszínekből keverhető a szín.")
            return 0;
        }
    }

    if(szinek.length == 0 || szinek.length == 1) {
        return 0;
    }

    for(let i =0 ; i < szinek.length; i++) {
        if(szinek[0] === szinek[1] || szinek[0] === szinek[2] || szinek[1] === szinek[2]) {
            console.log("Hiba! Csak különböző alapszínekből keverhető a szín.");
            return 0;
        } 
    }

    if(szinek.length == 2) {
        return 1;
    } else if(szinek.length == 3) {
        return 4;
    } else {
        console.log("Hiba! Túl sok színt adtál meg!");
        return 0;
    }
}