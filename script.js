 /*let e para criar uma variavel*/
        let hora = new Date().getHours();
        let body =document.body;
        let personagem1 = document.getElementById("ponei1")
        let personagem2 = document.getElementById("ponei2")
        let sol = document.getElementById("sol")
        let lua = document.getElementById("lua")
        let castelo =document.getElementById("castelo")
        let estrela =document.getElementById("star")
        let ceu = document.getElementById("sky")
        
        if(hora >= 6 && hora < 11){
            document.body.className = "dia";
            personagem1.src= "img/Celestia.gif"
            castelo.style.display= "block"
            estrela.style.display="none"
            ceu.style.display="none"
         



           personagem1.style.display="block";
           personagem2.style.display="none";
           sol.style.display="block";
           lua.style.display="none";

        } else if(hora >= 12 && hora < 18){
           document.body.className = "tarde";
           personagem1.src="img/Celestia.gif"
            castelo.style.display= "block"
            ceu.style.display="block"

           personagem1.style.display="block";
           personagem2.style.display="none";

           sol.style.display="block";
           lua.style.display="none";
           estrela.style.display="none"
        

        } else{
          document.body.className = "noite";
          castelo.style.display="block"
          personagem2.src= "img/Luna.gif"
          ceu.style.display="none"

          personagem2.style.display="block";
          personagem1.style.display="none";

          lua.style.display="block";
          sol.style.display="none";
          estrela.style.display="block";
        }

     
    
     