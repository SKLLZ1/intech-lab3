const repository = [
    "https://i.imgur.com/3dHwUA7.png",
    "https://cdni.rt.com/russian/images/2021.12/article/61af650202e8bd1fa54cd5e2.jpg"
];
function load(){
    let textBox = document.getElementById("text-box");
    let picBox = document.getElementById("picture-box");
    textBox.value = picBox.alt;
}

function select(){
let number = document.getElementById("mySelect").value;
let picBox = document.getElementById("picture-box");
picBox.src = repository[number];
}

function altTextChange(){
    let picBox = document.getElementById("picture-box");
    let textBox = document.getElementById("text-box");
picBox.alt = textBox.value;
}

function heightChange(){
    let height = document.getElementById("height-ctrl").value * 10;
    let picBox = document.getElementById("picture-box");
    picBox.height = height;

}

function widthChange(){
    let width = document.getElementById("width-ctrl").value * 10;
    let picBox = document.getElementById("picture-box");
    picBox.width = width;
}
function borderChange(){
    let borderWidth = document.getElementById("border-ctrl").value;
    let picBox = document.getElementById("picture-box");
    picBox.style.border = `${borderWidth}px solid red`;
}

let user = {
    name: "John",
    mark: 5
};

console.log(user.name + "-" + user.mark);
