let extraerDato = ()=>{

        let texto1=document.getElementById('txtTexto').value
        return texto1;
}

let encriptarTexto = ()=>{
    let texto=extraerDato();
    if(texto!=0){
    let textoEncriptado = "";
            let i=0
            while(i<texto.length){
                if(texto[i]=="e"){
                    textoEncriptado= textoEncriptado + "enter"
                }else if(texto[i]=="i"){
                    textoEncriptado=textoEncriptado + "imes"
                }else if(texto[i]=="a"){
                    textoEncriptado=textoEncriptado + "ai"
                }else if(texto[i]=="o"){
                    textoEncriptado=textoEncriptado + "ober"
                }else if(texto[i]=="u"){
                    textoEncriptado=textoEncriptado + "ufat"
                }else{
                    textoEncriptado=textoEncriptado + texto[i]
                }
                i++;
            }
            document.getElementById("txtEncriptado").value=textoEncriptado;
            document.getElementById("txtTexto").value='';
        }else{
            return Swal.fire({
                title: "Error",
                text: "Ingrese el texto a cifrar",
                icon: "info"
              })
        }

}

 let desencriptadoTexto = () => {
           let textoEncriptado = extraerDato();
            var textoDesencriptado=""
            let j=0
            if(textoEncriptado!=0){
            while( j < textoEncriptado.length ){
                if(textoEncriptado[j] == "a"){
                    textoDesencriptado = textoDesencriptado + "a"
                    j = j+2;
                }
                else if(textoEncriptado[j] == "e"){
                    textoDesencriptado = textoDesencriptado + "e"
                    j = j+5;
                }
                else if(textoEncriptado[j] == "i"){
                    textoDesencriptado = textoDesencriptado + "i"
                    j = j+4;
                }
                else if(textoEncriptado[j] == "o"){
                    textoDesencriptado = textoDesencriptado + "o"
                    j= j+4;
                }
                
                else if(textoEncriptado[j] == "u"){
                    textoDesencriptado = textoDesencriptado + "u"
                    j = j+4;
                }
                else{
                    textoDesencriptado = textoDesencriptado + textoEncriptado[j];
                    j=j+1;
                }
                
            }
            document.getElementById("txtEncriptado").value=textoDesencriptado;
            document.getElementById("txtTexto").value='';
        }else{
            return Swal.fire({
                title: "Error",
                text: "Ingrese el texto a descifrar!",
                icon: "info"
              })
        }
    }


 function copiarTexto() {
    var textoEncriptado = document.getElementById("txtEncriptado");
       textoEncriptado.select();
        document.execCommand("copy");
        document.getElementById('txtEncriptado').value='';
        
        input.blur();
        
}
function limpiarTexto() {
    document.getElementById("txtTexto").value='';
    document.getElementById("txtEncriptado").value='';
        
}