let ticket = 350;
let hotel = 680;
let tour = 230;

// min 3
// min 30
let kun = Math.floor(Math.random() * 30 ) + 1;


let input = prompt(`Assalomu Alaykum Script-Tourga xush kelibsiz \nSayohat Narxi: ${ticket+hotel+tour}$ \nMablag'ni kiriting !`);

if(ticket+hotel+tour <= input){
    alert(`Chipta Narxi ${ticket}$ \nMexmonxona Narxi ${hotel}$  \nSayohat uchun ${tour}$ \nUmumiy: ${ticket+hotel+tour}$ \nPulingiz: ${input-(ticket+hotel+tour)}$ qoldi \nOq yo'l`)


} else if(ticket+hotel+tour >= input){
    alert(`Chipta Narxi ${ticket}$ \nMexmonxona Narxi ${hotel}$  \nSayohat uchun ${tour}$ \nUmumiy: ${ticket+hotel+tour}$ \nPulingiz yetarli emas ! \n${kun} dan keling`)
}else{
    alert("Xatolik yuz berdi !")
}


// if(ift = "ha"){
//     alert("Oq yo'll");
// }




