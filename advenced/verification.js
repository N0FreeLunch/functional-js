import * as Rx from 'rxjs';

var valid = false;
var elem = document.querySelector('#student-ssn1');
elem.onkeyup = function (event) {
  var val = elem.value;
  console.log(val);
  if(val !== null && val.length !== 0) {
    val = val.replace(/^\s*|\s*$|\-s/g,'');
    if(val.length === 9){
      console.log(`올바른 SSN: ${val}!`);
      valid = true;
    }
  } else {
    console.log(`잘못된 SSN: ${val}!`);
  }
};


// Rx.Observable.fromEvent(document.querySelector('#student-ssn2'), 'keyup')
//   .pluck('srcElement', 'value')
//   .map(ssn => ssn !== null && ssn.length === 9)
//   .subscribe(validSsn => {
//     console.log(`올바른 SSN ${validSsn}`);
//   });
