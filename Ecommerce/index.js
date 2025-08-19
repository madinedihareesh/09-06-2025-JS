let container=document.getElementById('productcontainer')
        async function fetchdata(){
            let response=await fetch('https://fakestoreapi.com/products');
            let data=await response.json();
            console.log(data);
            data.map((item)=>{
                let card=`
                <div class='item card w-25 border border-3 border-dark mt-2 text-center align-item-center'>
                    <p>${item.title}</p>
                    <img class='w-50 mx-auto' src='${item.image}'/>
                </div>
                `
                container.innerHTML+=card;
                
                 
            })
            
        }
        fetchdata();