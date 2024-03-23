document.addEventListener('DOMContentLoaded', function (){
  const input = document.getElementById('input');
  const buttons = document.querySelectorAll('.button button');
   buttons.forEach(button => {
      button.addEventListener('click', function () {
          const value = this.getAttribute('value');
          if (value === 'AC') {
              input.value = '';
          }
          else if (value === 'del') {
              input.value = input.value.slice(0, -1);
          }
          else if (value === '=') {
              try {
                  input.value = eval(input.value);
              } catch (error) {
                  input.value = 'Error';
              }
          }
          else {
              input.value += value;
          }
      });
  });
});
