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



            let table = document.querySelector('.table-content');

            console.log(table);
            let HTML = '';
            
    function New(data) {
    for (let i=0; i<data.length; i++) {
        HTML += `<div class="table-row">
                <div class="cell">1</div>
                <div class="cell">${month[i]}</div>
                <div class="cell">${account[i].income || 0}</div>
                <div class="cell">${account[i].expense || 0}</div>
                <div class="cell">${(account[i].income || 0) - (account[i].expense || 0) }</div>
            </div>`;
    }
 



}
            
    New(month);

    function sum(Dta, ) {
    for (let a=0; a<Dta.length; a++) {
        HTML += `<div class="table-footer">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">0.00 Eur</div>
            <div class="cell"></div>
        </div>`;
    }
    }
            
 table.innerHTML = HTML;
console.log(account);

// function skay(month){
// let monthsky=month

// }
