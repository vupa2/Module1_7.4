document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.querySelector('input').value;
  const from = document.querySelector('#from').value;
  const to = document.querySelector('#to').value;

  const result = (input * to / from).toFixed(5);
  document.querySelector('#result').innerHTML = `Result: ${result}`;
})
