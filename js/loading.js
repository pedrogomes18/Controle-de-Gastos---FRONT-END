function showLoading(){
    const div = document.createElement("div");
    div.classList.add("carregando");

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);

}

function hideLoading(){
    const loadins = document.getElementsByClassName("carregando");

    if(loadins.length){
        loadins[0].remove();
    }
}

