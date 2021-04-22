const orang = document.getElementById('orang');
const gajah = document.getElementById('gajah');
const semut = document.getElementById('semut');
const dataSuit =['orang','gajah','semut'];
const imgPemenang = document.getElementById('img1');

//Function mencari gambar pemenang
function pemenang(n){
    return imgPemenang.setAttribute('src',n)

}

//Function komputer memilih 
function inputComputer(){
    return dataSuit[Math.round(Math.random()*2)];
}



orang.addEventListener('click', function(){
    if(inputComputer() == 'orang') alert('draw')
    else if(inputComputer() == 'gajah') pemenang('img/gajah.png')
    else if(inputComputer() == 'semut') pemenang('img/orang.png');
    

})


gajah.addEventListener('click', function(){
    if(inputComputer() == 'orang') pemenang('img/gajah.png')
    else if(inputComputer() == 'gajah') alert('draw')
    else if(inputComputer() == 'semut') pemenang('img/semut.png');
    

})


semut.addEventListener('click', function(){
    if(inputComputer() == 'orang') pemenang('img/orang.png')
    else if(inputComputer() == 'gajah') pemenang('img/semut.png');
    else if(inputComputer() == 'semut') alert('draw');
    

})