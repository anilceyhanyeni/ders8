const modlar = [
    {
        ad: "beach"
    },
    {
        ad: "birds"
    },
    {
        ad: "cafe"
    },
    {
        ad: "campfire"
    },
    {
        ad: "city"
    },
    {
        ad: "fireplace"
    },
    {
        ad: "forest"
    },
    {
        ad: "heavy-rain"
    },
    {
        ad: "night-crickets"
    },
    {
        ad: "rain-camping"
    },
    {
        ad: "rain"
    },
    {
        ad: "rain-windshield"
    },
    {
        ad: "snow"
    },
    {
        ad: "thunder"
    },
    {
        ad: "train"
    }
]

let calanSesler = []

const appElemani = document.querySelector("section#app")

//liste kutusu
const listeElemani = document.createElement("div")
listeElemani.id = "liste-elemani"
appElemani.append(listeElemani)

//durdurma butonu
const durdurmaElemani = document.createElement("button")
durdurmaElemani.textContent = "Tümünü Kapat"
durdurmaElemani.id = "durdurma-elemani"
appElemani.append(durdurmaElemani)
durdurmaElemani.addEventListener("click", olay=>{
    modlar.forEach( mod=>{
        if( mod.audioEleman !== undefined && mod.audioEleman.paused !== true ) {
            mod.audioEleman.pause()
        }
    } )
})

modlar.forEach( (mod, sira)=>{
    let modCerceve = document.createElement("div")

    //görsel ekle
    let modGorsel = document.createElement("img")
    modGorsel.src = "img/" + mod.ad + ".jpg"
    modCerceve.append(modGorsel)

    //ses ekle
    let modSes = document.createElement("audio")
    modSes.src = "audio/" + mod.ad + "-sound.mp3"
    modSes.loop = true
    modCerceve.append(modSes)

    //olay statementları
    //img tıklandığında...
    modGorsel.addEventListener("click", olay=>{

        if( modSes.paused === true || modSes.paused === undefined ) {
            modSes.play()
            
            mod.audioEleman = modSes

            calanSesler.push(sira)
            listeGuncelle() 
        } else { //demek ki ses daha önce play edilmiş
            modSes.pause()

            //array filter() fonksiyonu ile calanSesler arrayi içinden tıklanan ses numarasını çıkaracağız
            calanSesler = calanSesler.filter( deger=> { return deger !== sira } )
            
            listeGuncelle() 
        }

        modCerceve.classList.toggle("mod-golge")
    })

    appElemani.append(modCerceve)
} )



function listeGuncelle() {
    listeElemani.innerHTML = "" //liste divi içini boşalttık
    calanSesler.forEach( sira=>{
        let sesAdi = modlar[sira].ad

        let yeniP = document.createElement("p")
        yeniP.textContent = sesAdi

        listeElemani.append(yeniP)
    } )
}