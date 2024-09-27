const elements = document.querySelectorAll('.hidden')


const myObserver = new IntersectionObserver ( (obs) =>{
    obs.forEach ((e) =>{
        if(e.isIntersecting) {

            console.log(e ,e.isIntersecting)
            e.target.classList.add('Visivel')             
        }else{

            e.target.classList.remove('Visivel')

        }

    })
     console.log('aqui!') 

})

elements.forEach( elemt => myObserver.observe(elemt) )