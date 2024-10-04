function aggiungi(){
    let elencobacchette = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];
    
   
    let varcodice = document.getElementById("input-codice").value;
    let varmateriale = document.getElementById("input-materiale").value;
    let varnucleo = document.getElementById("input-nucleo").value;
    let varlunghezza = document.getElementById("input-lunghezza").value;
    let varresistenza = document.getElementById("input-resistenza").value;
    let varproprietario = document.getElementById("input-proprietario").value;
    let varcasata = document.getElementById("input-casata").value;
    let varambito = document.getElementById("input-ambito").value;
    let varfoto = document.getElementById("input-foto").value;


    let back = {
       codice :varcodice,
        materiale : varmateriale,
       nucleo : varnucleo,
       lunghezza : varlunghezza,
       resistenza: varresistenza,
      proprietario : varproprietario,
      casata : varcasata,
      ambito : varambito,
      foto : varfoto,
    }

    elencobacchette.push(back);
    localStorage.setItem("bacchette", JSON.stringify(elencobacchette))
    
    location.href = "bacchette.html"
}

