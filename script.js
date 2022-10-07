const texto_entrada= document.querySelector(".input-texto");
const mensaje= document.querySelector(".mensaje");

function btn_encriptar(){
    let texto=texto_entrada.value;
    texto=texto.toLowerCase();
    let nuevo_texto="";
    for(let letra of texto){
        if (letra=="a"){
            nuevo_texto+="ai";
            continue;
        }
        else if(letra=="e"){
            nuevo_texto+="enter";
            continue;
        }
        else if(letra=="i"){
            nuevo_texto+="imes";
            continue;
        }
        else if(letra=="o"){
            nuevo_texto+="ober";
            continue;
        }
        else if(letra=="u"){
            nuevo_texto+="ufat";
            continue;
        }
        nuevo_texto+=letra;
    }
    mensaje.style.backgroundImage = "none";
    document.getElementById("boton_copiar").style.display = "block"    
    texto_entrada.value = "";
    mensaje.value=nuevo_texto;
    
}

function btn_desencriptar(){
    let texto=texto_entrada.value;
    let encripado_1=["ai","a"];
    let encripado_2=["enter","e"];
    let encripado_3=["imes","i"];
    let encripado_4=["ober","o"];
    let encripado_5=["ufat","u"];
    
    while(texto.includes(encripado_1[0]) || texto.includes(encripado_2[0]) || texto.includes(encripado_3[0]) || texto.includes(encripado_4[0]) || texto.includes(encripado_5[0])){
        texto=texto.replace(encripado_1[0], encripado_1[1]);
        texto=texto.replace(encripado_2[0], encripado_2[1]);
        texto=texto.replace(encripado_3[0], encripado_3[1]);
        texto=texto.replace(encripado_4[0], encripado_4[1]);
        texto=texto.replace(encripado_5[0], encripado_5[1]);
    }

    mensaje.style.backgroundImage = "none";
    document.getElementById("boton_copiar").style.display = "block"    
    texto_entrada.value = "";
    mensaje.value=texto;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    mensaje.style.backgroundImage = 'url("./Muneco.png")';
    document.getElementById("boton_copiar").style.display = "none" 
    alert("Texto copiado");
}


