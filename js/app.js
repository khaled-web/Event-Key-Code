const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
 // console.log(event)
 insert.innerHTML = `      <!-- key -->
      <div class="key">
        ${event.key}
        <small>event.key</small>
      </div>
      <!-- end of key -->

      <!-- key -->
      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>
      <!-- end of key -->

      <!-- key -->
      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
      <!-- end of key -->`

})