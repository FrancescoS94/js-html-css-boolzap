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
    $(".chat").append(msg);
    $("#add-text").val("");
    // Risposta automatica.
    setTimeout(rispostaAutomatica, 2000);
}

// Funzione messaggio di risposta automatica.
function rispostaAutomatica() {
    // Creo il clone del template.
    var msg2 = $(".template .message").clone();
    // Aggiungo la classe.
    msg2.addClass("received");
    // Aggiungo il testo.
    msg2.find(".msg-text").append("ok");
    msg2.find(".msg-time").append(myTimer());
    // Mettere l'elemento nel DOM.
    $(".chat").append(msg2);
}

// Ore e Minuti.
function myTimer() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    return h + ":" + m;
}
