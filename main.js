const date = new Date(); //current date
const renderCalendar =()=>{    
    date.setDate(1)
    
    const month = date.getMonth(); // current month
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    const nextDays = 7-lastDayIndex;
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const reminderList =[
        "2020-10-23",
        "2020-10-27",
        "2020-09-25"
    ]


    
    document.querySelector('.date h1').innerHTML=months[date.getMonth()];
    
    document.querySelector('.date p').innerHTML=new Date().toDateString();
    
    let days="";
    if(firstDayIndex>=1){
        for(let x=firstDayIndex-1; x>0; x--){
            days +="<div class='prev-date'>"+(prevLastDay-x+1)+"</div>";
        }
    }else{
        for(let x=5; x>=0; x--){
            days += `<div class='prev-date'>${prevLastDay-x}</div>`;
        }
        // days += `<div>${firstDayIndex+1}</div>`;
    }
    
    
    for (let i = 1; i <=lastDay; i++) {
        if (
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          days += `<div class="today">${i}</div>`;
        } else {
          days += `<div>${i}</div>`;
        }
         for(let r=0; r<reminderList.length; r++){
             let rd = new Date(reminderList[0]).getDate();
             if(
                i === rd &&
                date.getMonth() === new Date().getMonth()
             ){
                 
             }
         }
      }

    //   if(nextDays >= 1)
    //   {
          for(let j = 1; j <= nextDays; j++){
              days += `<div class="next-date" onclick="selected()">${j}</div>`;
              monthDays.innerHTML=days;
          }
    //   }
    //   else
    //   {
    //       for(let k = 0; k <= nextDays; k++){
    //           days += `<div class="invisible"></div>`;
    //           monthDays.innerHTML=days;
    //       }
    //   }

}

document.querySelector(".prev").addEventListener("click",()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})

document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();