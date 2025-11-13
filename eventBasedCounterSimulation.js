let count = 0;
function counterController() {
  function showCount() {
    console.log(`Current count: ${count}`);
  }
  function increment() {
    count++;
    showCount();
  }
  function decrement() {
    count--;
    showCount();
  }
  increment();
  increment();
  decrement();
}
counterController();
