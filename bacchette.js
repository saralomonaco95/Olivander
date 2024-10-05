function stampaTabella(){
    console.log("Invocato Stampa")
    let elencobacchette = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    let contenitore = "";
    for(let [idx, item] of elencobacchette.entries()){
        contenitore += `
            <tr>

                <td>${item.codice}</td>
                <td>${item.materiale}</td>
                <td>${item.nucleo}</td>
                  <td>${item.lunghezza}</td>
                    <td>${item.resistenza}</td>
                      <td>${item.proprietario}</td>
                           <td>${item.casata}</td>
                           <td>${item.ambito}</td>
                      <td> <img class="grandezzaimg" src ="${item.foto}"></td>
                <td>
                    <button type="button" class="btn btn-danger" onclick="elimina(${idx})">Elimina</button>
                    <button type="button" class="btn btn-warning mt-5" onclick="modifica(${idx})">Modifica</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-tabella").innerHTML = contenitore;
}

function elimina(indice){
    let elencobacchette = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    elencobacchette.splice(indice, 1);

    localStorage.setItem("bacchette", JSON.stringify(elencobacchette))
    stampaTabella();
}

function modifica(indice){
    $("#modaleModifica").modal('show');

    let elencobacchette = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    for(let [idx, item] of elencobacchette.entries()){
        if(indice == idx){
           
           $("#input-id").val(item.idx);
            $("#input-codice").val(item.codice);    
            $("#input-materiale").val(item.materiale);  
            $("#input-nucleo").val(item.nucleo);   
            $("#input-lunghezza").val(item.lunghezza);           
            $("#input-resistenza").val(item.resistenza);    
            $("#input-proprietario").val(item.proprietario);   
            $("#input-casata").val(item.casata); 
            $("#input-ambito").val(item.ambito);  
            $("#input-foto").val(item.foto); 
        }
    }
}

function salva(){
    let varid = document.getElementById("input-id").value;
    let varcodice = document.getElementById("input-codice").value;
    let varmateriale = document.getElementById("input-materiale").value;
    let varnucleo = document.getElementById("input-nucleo").value;
    let varlunghezza = document.getElementById("input-lunghezza").value;
    let varresistenza = document.getElementById("input-resistenza").value;
    let varproprietario = document.getElementById("input-proprietario").value;
     let varambito = document.getElementById("input-ambito").value;
     let varcasata = document.getElementById("input-casata").value
   let varfoto = document.getElementById("input-foto").value;

    let elencobacchette = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    for(let [idx, item] of elencobacchette.entries()){
        if(idx == varid){
           
           item.codice = varcodice;
           item.materiale = varmateriale;
           item.nucleo = varnucleo;
           item.lunghezza = varlunghezza;
           item.resistenza = varresistenza;
           item.proprietario = varproprietario;
           item.casata =varcasata;
           item.ambito = varambito;
           item.foto =varfoto; 


            localStorage.setItem("bacchette", JSON.stringify(elencobacchette));
            stampaTabella();
            $("#modaleModifica").modal('hide');
            return;
        }
    }
}

stampaTabella();
