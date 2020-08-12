window.onload = function() {

    
        // VARIABLES
        let faim = 100; //stat de faim
        let clock1 = setInterval(baisseFaim, 300); // vitesse de décrémentation stat faim

        let soif = 100; //stat de soif
        let clock2 = setInterval(baisseSoif, 330); // vitesse de décrémentation stsoif

        let fun = 100; //stat de fun
        let clock3 = setInterval(baisseFun, 350); // vitesse de décrémentation fun

        let fuerza = false; // boolean pour vérifier si Baby Yoda utilise la force
        let preocupado = false; // boolean pour verifier si Baby Yoda est préoccupé
        let gameover = 0; // gameover controleur


        
        // BOUTONS DES BESOINS
        document.getElementById("btn-faim").onclick = remplirFaim;
        document.getElementById("btn-soif").onclick = remplirSoif;
        document.getElementById("btn-fun").onclick = remplirFun;
        

        
        // FONCTIONS PRINCIPALES
        
        // Bouton Nourrir 
        function remplirFaim(){
            if(faim<=99&&faim!=0){
                faim += 2;
            }
            else if(faim===0){
                faim+=0;
            }
        }
        
        // Bouton Boire
        function remplirSoif(){
            if(soif<=99&&soif!=0){
                soif += 2;
            }
            else if(soif===0){
                soif+=0;
            }
        }
        
        // Bouton Force
        function remplirFun(){
            if(fun<=99&&soif!=0){
                fun += 2;
            }
            else if(fun===0){
                fun+=0;
            }
        }
        
        // fait descendre la barre de faim
        function baisseFaim(){
            if(faim === 0){
                clearInterval(clock1);
                alert("Affamé est Baby Yoda!");
                gameovercheck();
            }
            else{
                faim--;
                document.getElementById("barre-faim").value = faim;
            }
        }
        
        // fait descendre la barre de soif
        function baisseSoif(){
            if(soif === 0){
                clearInterval(clock2);
                alert("Assoifé est Baby Yoda!");
                gameovercheck();
            }
            else{
                soif--;
                document.getElementById("barre-soif").value = soif;					
            }
        }
        
        // fait descendre la barre de fun
        function baisseFun(){
            if(fun === 0){
                clearInterval(clock3);
                alert("La force abandonne Baby Yoda!");
                gameovercheck();
            }
            else{
                fun--;
                document.getElementById("barre-fun").value = fun;
            }
        }



        // fonction images Baby Yoda
        function childYodaHandler(){
            if(faim===0&&soif===0&&fun===0){
                document.getElementById("child-yoda").src = "assets/images/yoda3.gif";
            }
            else if(fuerza===false&&preocupado===false){
                document.getElementById("child-yoda").src = "assets/images/yoda2.gif";
            }
            else if(fuerza===true&&preocupado===false){
                document.getElementById("child-yoda").src = "assets/images/yoda5.gif";
            }
            else if(fuerza===true&&preocupado===true){
                document.getElementById("child-yoda").src = "assets/images/yoda4.gif";
            }
        }


        // fonction qui verifie si toutes les stats sont 0 
        // si oui, apparition pop-up Game Over
        function gameovercheck(){
            if(faim===0&&soif===0&&fun===0&&gameover===0){
                alert("Game Over!");
                gameover++;
                childYodaHandler();
            }
            else{
                childYodaHandler();
            }
        }


        // CONSOLE INPUT OUTPUT

        // constantes
        const userBox = document.getElementById("user-box");
        const outputBox = document.getElementById("output-box");

        // fonction
        function inputField(e) {
            if (e.keyCode === 13) {
                let x = userBox.value;

                switch (x) {
                    case 'nourrir':
                        remplirFaim()
                        outputBox.innerHTML = "commande saisie: " + x;
                        break;
                    case 'boire':
                        remplirSoif()
                        outputBox.innerHTML = "commande saisie: " + x;
                        break;
                    case 'force':
                        remplirFun()
                        outputBox.innerHTML = "commande saisie: " + x;
                        break;
                    case 'aide':
                        outputBox.innerHTML = "les commandes sont nourrir, boire et force";
                        break;
                    case 'Aide':
                        outputBox.innerHTML = "les commandes sont nourrir, boire et force";
                        break;
                    default:
                        outputBox.innerHTML = "commande inconnue: " + x;
                        break;
                        
                }
            }
        }
    
        userBox.addEventListener("keydown", inputField);

    }

