const counts=document.querySelectorAll('.count')
const speed=50
counts.forEach((counter)=>{
    function updata(){
        const target=Number(counter.getAttribute('data-target'))
        const count=Number(counter.innerText)
        const inc=target/speed
        if (count<target){
            counter.innerText=Math.floor(inc+count)
            setTimeout(updata,1)
        }
        else{
            counter.innerText=target
        }
    }
    updata()
})