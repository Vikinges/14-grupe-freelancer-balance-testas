import account from './data.js';

// class Month {
//     constructor(Month, income, expensive){
//     this.month=Month;
//     this.income=income;
//     this.expense=expensive;
//     this.init();

//     }
//    init(){
  

//    }


// }

let month =['January', 
            'February',
            'March' ,
            'April',
            'May' ,
            'June' ,
            'July' ,
            'August', 
            'September', 
            'October' ,
            "November" ,
            'December' ]



const DOM = document.querySelector('.table');
console.log(DOM);
let rows=1;
 let HTML = `<div class="table-head">
 <div class="cell">#</div>
 <div class="cell">Mėnuo</div>
 <div class="cell">Įplaukos</div>
 <div class="cell">Išlaidos</div>
 <div class="cell">Balansas</div>
</div>
<div class="table-content">
<div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div>
<div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[4].income} Eur</div>
<div class="cell">${account[4].expense}</div>
<div class="cell">${ (account[1].income - account[1].expense) + account[4].income } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell"> Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div><div class="table-row">
<div class="cell">${rows++}</div>
<div class="cell">${month[rows-2]}</div>
<div class="cell">${account[1].income} Eur</div>
<div class="cell">${account[1].expense}</div>
<div class="cell">${account[1].income - account[1].expense } Eur</div>
</div>
</div>
<div class="table-footer">
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">0.00 Eur</div>
                    <div class="cell">0.00 Eur</div>
                    <div class="cell">0.00 Eur</div>
                </div>`    
DOM.innerHTML = HTML;       
// console.log(month);
console.log(account);

function skay(month){
let monthsky=month

}
