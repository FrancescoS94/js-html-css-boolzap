$("#add-text").keydown(function(){
    if (event.which == 13 || event.keyCode == 13) {
        addElement();
    }
});

// Funzione invio messaggio.
function addElement() {
    // Prendo il contenuto.
    var valore = $("#add-text").val();
    // Creo il clone del template.
    var msg = $(".template .message").clone();
    // Aggiungo la classe.
    msg.addClass("sent");
    // Inserimento del testo.
    msg.find(".msg-text").append(valore);
    msg.find(".msg-time").append(myTimer());
    // Inserimento nel Dom.
    $(".main-2.active").append(msg);
    $("#add-text").val("");
    // Risposta automatica.
    setTimeout(rispostaAutomatica, 1000);
}

// Funzione messaggio di risposta automatica.
function rispostaAutomatica() {
    // Creo il clone del template.
    var msg2 = $(".template .message").clone();
    // Aggiungo la classe.
    msg2.addClass("received");
    // Aggiungo il testo.
    msg2.find(".msg-text").append("Ok");
    msg2.find(".msg-time").append(myTimer());
    // Mettere l'elemento nel DOM.
    $(".main-2.active").append(msg2);
}

// Ore e Minuti.
function myTimer() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    return h + ":" + m;
}

// Funzione per aggiungere lo 0 alle ore ed ai minuti.
function addZero(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    return numero;
}

// Funzione per aggiungere l'active all'elemento selezionato.
$(".aside-p1").click(function() {
    $(".aside-p1").removeClass("active");
    $(this).addClass('active');
    // Inserisco nella variabile il contenuto di img e h4.
    var img = $(this).find("img").attr("src");
    var name = $(this).find(".a-p1-child-1 h4").text();
    // Copio il contenuto della variabile nel mio main.
    $(".main-1").find("img").attr("src", img);
    $(".main-1").find(".m-p1 h4").text(name);
    // Trovo la posizione.
    var position = $(this).index();
    // Rimuovo la classe active e la riaggiungo nella nuova posizione.
    $(".main-2").removeClass("active");
    $(".main-2").eq(position).addClass("active");
});

// Funzione per ricercare i contatti nella lista chat.
$("#search").keyup(function() {
    var testo = $("#search").val();
    $(".aside-p1").each(function() {
    var name = $(this).find("h4").text().toLowerCase();

    if (name.includes(testo)) {
        $(this).show();
    } else {
        $(this).hide();
    }
    });
});
