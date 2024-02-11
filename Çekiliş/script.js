let cekilisEkle = document.querySelector('body .cekilisAlan button')
let uyeEkle = document.querySelector('body .cekilisAlan input[type="text"]')
let uyariButon = document.querySelector('body .error button')
let tablo = document.querySelector('table');
let cekilisUyeleri = [];
let siraNo = -1;

cekilisEkle.addEventListener('click',cekilisUyesi)
uyariButon.addEventListener('click',uyariKapat)


function cekilisUyesi(){
    if(uyeEkle.value != ""){
    cekilisUyeleri.push(uyeEkle.value);
    siraNo++;
    let tabloElement = `
        <tr style="font-weight: bold;">
        <td>${siraNo}</td>
        <td>${cekilisUyeleri[siraNo]}</td>
        </tr>`
    tablo.insertAdjacentHTML('beforeend',tabloElement)
    uyeEkle.value = '';
    }else{
        uyariGoster()
    }
}

function uyariGoster(){
    let error = new Audio('sounds/error.mp3')
    error.play()
    document.querySelector('body .error').style.display = 'block'
}

function uyariKapat(){
    document.querySelector('body .error').style.display = 'none'
    document.querySelector('body .cekiliserror').style.display = 'none'
}

document.querySelector('#cekilis').addEventListener('click',cekilisBaslat)

function cekilisBaslat(){
    if(cekilisUyeleri.length > 6){
        let win = new Audio('sounds/win.mp3');
        win.play();
        document.querySelector('.cekilisKazanan').style.display = 'block'
        document.querySelector('body .cekilisKazanan p').textContent = `Kazanan: ${cekilisUyeleri[Math.floor(Math.random() * cekilisUyeleri.length)]}`
    }else{
        let error = new Audio('sounds/error.mp3')
        error.play()
        setTimeout(function(){
            document.querySelector('.cekiliserror').style.display = 'block'
        },100);
        
    }
}

document.querySelector('body .cekilisKazanan button').addEventListener('click',cekilisSonuc)

function cekilisSonuc(){
    document.querySelector('.cekilisKazanan').style.display = 'none'
}