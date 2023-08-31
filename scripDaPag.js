const tabuleiro = document.querySelectorAll("section");
const mostrarExercicio = document.querySelector(".selecionado");
const fecharExercicio = document.querySelector(".fechar");
const exercicio = document.querySelector(".exercicio");

const fechar = () =>{
    mostrarExercicio.style.display = "none"
}



const abrirExercicio = (numeroSelecionado) =>{
   
    
    mostrarExercicio.style.display = "flex"
    exercicio.style.background = `url(./imagens/${numeroSelecionado}.jpg)`;
    exercicio.style.backgroundPosition = "center"
    exercicio.style.backgroundSize= "contain"
    exercicio.style.backgroundRepeat = "no-repeat"
    

}

tabuleiro.forEach((sessão, numero) =>{
    const valorNumero = numero + 1
    
   
    sessão.innerHTML =` <p>Exercicio: <span class ="numeroExercicio">${valorNumero}</span></p>`
    
    
    sessão.addEventListener("click", () => {
        
        setTimeout(()=>abrirExercicio(valorNumero), 300)
    });
})



fecharExercicio.addEventListener("click", fechar)