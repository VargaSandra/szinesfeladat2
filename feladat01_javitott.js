function faktorialis(szam) {
    let eredmeny = 1;
    if(szam == 0) {
        return 1;
    }
    for(let i=1; i<szam+1; i++) {
        eredmeny = eredmeny*i;
    }
    return eredmeny;
}

function stringMindenElem(szinek) {
    let eredmeny = true;
    for(let i=0; i<szinek.length; i++) {
        if(typeof szinek[i] !== "string") {
            eredmeny = false;
            break;
        }
    }
    return eredmeny;
}


function szinkeveres(szinek) {
    if(!stringMindenElem(szinek)) {
        console.log("Csak string lehet");
        return 0;
    }

    let lehetosegekSzama = 0;
    for(let i=2; i<szinek.length+1; i++) {
       lehetosegekSzama = lehetosegekSzama + (faktorialis(szinek.length) / (faktorialis(i) * faktorialis(szinek.length - i)));
    }
    return lehetosegekSzama;
}

//console.log(szinkeveres(["sárga","kék","zöld","piros","szürke"])); = 26