import React,{useState,useEffect} from 'react'


const ProductApi=()=>{
  const url =  'https://dummyjson.com/products';
  const [data,setData] = useState([])
  const [cart, setCart] = useState([])

  const addCart = (item) => {
     const newItem = {...item, quantity: 1};
     setState([...cart, newItem]);
  };

  useEffect(()=>{
    fetch(url).then(response=>response.json()).then(json=>{
      console.log(json)
     setData(json.products)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  return(
    <div className='main-container'><h1>ProductApi</h1>
    <div className='grid-wrapper'>
   
    {
      data.map((item,index)=>{
        return(<div key={item.index}>
         {/* <div className='cardp'>{index+1}</div>*/}
         
         <div className='proimg'><img src={item.images[2]}/></div>
          <div className='protittle'><h2>{item.title}</h2></div>
          <div className='proprice'><h3>Price : {item.price}</h3></div>
          <div className='probrand'><h4>{item.brand}</h4></div>
          <button type='button' onClick={() => addCart(item)}>Add to card</button>
          
          
  

 


          
          </div>)
      })
    }
    </div>
    
    
    </div>)
}

export default ProductApi;
