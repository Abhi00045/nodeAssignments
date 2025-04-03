function List({arr}) {
    return arr.map((obj)=>{
        return(
            <p key={obj.id}>
                {obj.name}{obj.age}
            </p>
        )
    })
}
export default List;