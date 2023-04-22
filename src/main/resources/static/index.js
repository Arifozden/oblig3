function bestill(){
    let errorCounter=0;
    let innFilm=$("#film").val();
    if ((innFilm===null)||(innFilm==="Velg Film")){
        errorCounter++;
        alert("Velg en film");
    }
    let innAntall=$("#antall").val();
    if ((innAntall===null)||(innAntall==="")){
        errorCounter++;
        alert("Skriv inn antall");
    }
    let innNavn=$("#navn").val();
    if ((innNavn===null)||(innNavn==="")){
        errorCounter++;
        alert("Skriv inn navnet");
    }
    let innEtternavn=$("#etternavn").val();
    if ((innEtternavn===null)||(innEtternavn==="")){
        errorCounter++;
        alert("Skriv inn etternavnet");
    }
    let innTelefonnr=$("#telefonnr").val();
    if ((innTelefonnr===null)||(innTelefonnr==="")){
        errorCounter++;
        alert("Skriv inn telefonnr");
    }
    let innEpost=$("#epost").val();
    if ((innEpost===null)||(innEpost==="")){
        errorCounter++;
        alert("Skriv inn epost");
    }
    if(errorCounter===0){
        const biletter={
            film:innFilm,
            antall:innAntall,
            navn:innNavn,
            etternavn:innEtternavn,
            telefonnr:innTelefonnr,
            epost:innEpost
        };

        $.post("/lagre",biletter,function (){
            hentAlle();
        });
        sletter();
    }
}

function hentAlle(){
    $.get("/vis",function (data){
        formater(data)
    });
}

function formater(bilettene){
    let ut="<h3>Alle bilettene</h3><table class='table table-striped'>" +
        "<tr class='table-info'><th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
    for(let b of bilettene){
        ut+="<tr><td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.navn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>"
    }
    ut+="</table>"
    $("#biletList").html(ut)
}


function slett(){
    $.get("/slett",function (){
        hentAlle();
    });
}

function sletter(){
    $("#film").val("")
    $("#antall").val("")
    $("#navn").val("")
    $("#etternavn").val("")
    $("#telefonnr").val("")
    $("#epost").val("")
}