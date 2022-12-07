export const Cart = ({item}) => { 
    let totalPrice = 0
    item.forEach(el => {
        totalPrice += el.price * (el.counter === undefined ? 0 : el.counter)
    })
    return ( 
    <div>
        <p>Nazwa zwierzecia ilosc</p>
        {item.map((el)=>{
            return(<p>
                {el.name}  {el.counter === undefined ? 0 : el.counter}
            </p>)
        })}
        <p>Suma Kupionych  {totalPrice}</p>
        
    </div>
    )
}