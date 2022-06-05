import Item from "./Item";

function List () {
    return(
       <>
         <h1>Minha Lista</h1>

         <ul>
             <Item marca= 'Ferrari' ano_lancamento={1965}/>
             <Item marca='Mercedes' ano_lancamento={1964}/>
         </ul>
       </>
    )
}

export default List;