var modal = document.querySelector('ion-modal');
let total=0;
let montant=document.getElementById('montant');
let type=document.getElementById('type');
function cancel() {
    modal.dismiss(null, 'cancel');
}

function confirm() {

    //console.log(montant.value, type.value);
    modal.dismiss([montant.value,type.value], 'confirm');
}

modal.addEventListener('willDismiss', (ev) => {
    if (ev.detail.role === 'confirm') {
        let amount=document.getElementById('total');

        //console.log(typeof parseInt(ev.detail.data[0]))
        const message = document.querySelector('#message');

            total+=parseInt(ev.detail.data[0]);
        amount.innerText=total+'€';

        montant.value="";
        type.value="";

        message.innerHTML += '<ion-col><ion-card><ion-card-content><ion-list><ion-item>'+ev.detail.data[1] +'</ion-item><ion-item>'+ev.detail.data[0] +'€</ion-item></ion-list></ion-card-content></ion-card></ion-card></ion-col>';
    }
});