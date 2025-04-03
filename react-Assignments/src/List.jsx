const ListCard = ({dataArray})=>{

    const handleDelete = (id)=>{
        dataArray.filter
    }

    return dataArray.map((obj)=>{
        return(
            <div>
                <div id="infomartion">
                <p key={obj.id}>Name : {obj.name}</p>
                <p  key={obj.id}>Gmail : {obj.email}</p>
                <p  key={obj.id}>Contact : {obj.contact}</p>
                <p  key={obj.id}>date of birth : {obj.dateOfbirth}</p>
                <p key={obj.id}>Position : {obj.position}</p>
                </div>
                <div className="info-buttons">
                    <button id="delete" onClick={handleDelete(obj.id)}>Delete</button>
                    <button id="edit">Edit</button>
                </div>
            </div>
        )
    })
}
export default ListCard