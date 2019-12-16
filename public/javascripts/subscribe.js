const subscribe_btn = document.getElementById('subscribe-form');
const subscribe_email = document.getElementById('subscribe-email');


subscribe_btn.addEventListener('submit', function(e) {
  
  if (subscribe_email.value == " " || null || undefined || ""){
    alert('em')
    e.preventDefault();
  } else {
    console.log(subscribe_email.value);

  }
})
