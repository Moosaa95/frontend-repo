var progress = document.querySelector('#file');
document.querySelector('.clik').innerHTML = '<b>Click me</b>';

progress.addEventListener('click', (e) => {
    
    document.querySelector('.ribbon').style.display = 'block';
   
})