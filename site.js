const menuBtn=document.getElementById('menuBtn'),drawer=document.getElementById('drawer');
if(menuBtn&&drawer){menuBtn.addEventListener('click',()=>{const open=drawer.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});}
