const mobileMenuBtn=document.querySelector('#mobile-menu')
const sidebar=document.querySelector('.sidebar')
const cerrarMenuBtn=document.querySelector('#cerrar-menu')

if(mobileMenuBtn){
    mobileMenuBtn.addEventListener('click',()=>{
        sidebar.classList.add('mostrar')
    })
}
if(cerrarMenuBtn){
    cerrarMenuBtn.addEventListener('click',()=>{
        sidebar.classList.add('ocultar')
        setTimeout(() => {
            sidebar.classList.remove('mostrar')
            sidebar.classList.remove('ocultar')
        }, 1000);
    })
}
const anchoPantalla=document.body.clientWidth
window.addEventListener('rezise',()=>{
    if(anchoPantalla>=768){
        sidebar.classList.remove('mostrar')
    }
})