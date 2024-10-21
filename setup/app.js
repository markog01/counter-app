// set inital count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
  const styles = e.currentTarget.classList;
  if(styles.contains('decrease')) {
    count--;
  } 
  else if (styles.contains('increase')) {
    count++;
  } 
  else if (styles.contains('reset')) {
    count = 0;
  }  /// in this case you could use a shorter form like else { count = 0 } because we only have 3 buttons 
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0 ) {
    value.style.color = 'red';
  } else {
    value.style.color = 'black';
  }
  value.textContent = count;
  });
});



