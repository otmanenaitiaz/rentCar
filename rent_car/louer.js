//prams kanjiboh mn le lien
var params = new URLSearchParams(window.location.search)
//nom kanakhdo le "nom" li kayn fle lien ("get('nom')")
var nom = params.get('nom')
//prix kanakhdo le "prix" li kayn fle lien ("get('prix')")
var prix = params.get('prix')

//kanakhdo fiha mn le document hadak l'element li  id dyalo 'inputNom
var inputNom = document.getElementById('inputNom')
//kanakhdo fiha mn le document hadak l'element li  id dyalo 'inputPrix
var inputPrix = document.getElementById('inputPrix')
//kanakhdo fiha mn le document hadak l'element li  id dyalo 'inputJour
var inputJour = document.getElementById('inputJour')
//tanchdo haaaaadak linputNom kan3mroh bla valeur dyal le nom li jbna mn l param li flien
inputNom.value = nom
//tanchdo haaaaadak linputPrix kan3mroh bla valeur dyal le prix li jbna mn l param li flien
inputPrix.value = prix 
//tanchdo hadak linput Jour kantsento 3lih weqtma tbdel kandiro dakchi li glna lih dakchi likatbin west {}
inputJour.addEventListener("change", function(){
    //tayakhod had jourValeur tay3mrha lia bla valeur dyal linput Jour likhtarina
    var jourValeur = inputJour.value
    //tayakhod had prixaleur tay3mrha lia bla valeur dyal linputPrix Li"tinah dik lijbna mn lparam
    var prixValeur = inputPrix.value
   
    //ji hsseb lia le rix total ched had 2 lilfog wdir3malaia hissabia 
    var prixTotal = prixValeur * jourValeur
    //kanakhdo fiha mn le document hadak l'element li  id dyalo 'total
    var total = document.getElementById('total')
    //tanchdo haaaaadak ltotal kan3mroh ble contenu dyal le prixtotal ali hsebna wtazido hdah "dhs"
    total.textContent = prixTotal + " dhs"
})