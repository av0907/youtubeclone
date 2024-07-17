
var nameList = [
    'Vishnu','Adi','Vishu','Sri',
    'Trilok','Ele','RK','Swarna','Sneha','Vyshu',
    'Suma','Vishu','Likith','Kamsi','Dheeru','Akshu','Satyam',
    'Jishnu','Anurag','Anirudh','Bala','Eswar','Sampath','Pooja',
    'Meghana','Mamatha','Sunavya','Keerthi','OPS','Lakshmi','Sandeep',
    'Raviteja','Prabhas','Kalki 2898','Deepika','Eagle','Vikramarkudu','Darling',
    'Srimanthudu','Nageswara rao','Mahesh','Jr.NTR','bhAAi','Pushpa','Video',
    'Manish', 'Kanni'
];


export function nameGenerator() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};


export function messageGenerator(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
