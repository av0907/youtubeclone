
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

const texts = [
  "Do you have a minute to talk?",
  "What do you think about the project update?",
  "Have you heard back from the client yet?",
  "Are we still on for tomorrow's presentation?",
  "Please review the attachments when you get a chance.",
  "That sounds great! When can we meet?",
  "Could you help me with the report?",
  "What time is convenient for you?",
  "Are you coming to the office party?",
  "How was your vacation?",
  "Any updates on the schedule?",
  "Could you confirm the details?",
  "What's the latest update?",
  "Any thoughts on my last email?",
  "Are you available for a call this afternoon?",
  "Please let me know your thoughts on this.",
  "Hope everything is going well with you!",
  "What did you think of the movie last night?",
  "Is everything set for the weekend?",
  "Do you need any assistance?",
  "Just a reminder to submit your timesheets.",
  "Looking forward to our meeting.",
  "Let me know if you need further information.",
  "Can we reschedule our meeting?",
  "I need your feedback on some items.",
  "Do you need me to send you the files?",
  "How did the conference go?",
  "Have a great day!",
  "See you at the seminar.",
  "Thank you for your help with this!",
  "Are you ready for the quiz today?",
  "How did the interview go?",
  "Can we discuss your report tomorrow?",
  "I saw your car in the parking lot.",
  "Are you planning to attend the workshop?",
  "Please check your inbox for the invitation.",
  "Did you get my message?",
  "I will be late to the office today.",
  "Can you please prepare the documents?",
  "The deadline has been extended."
];


export function nameGenerator() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};


export function messageGenerator(length) {
    /*let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;*/
    return texts[Math.floor( Math.random() * texts.length )];

}
