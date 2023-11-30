import { useParams } from "react-router-dom"

function EditItem() {
    const { id } = useParams();
  return (
    <div><h1>Edit item number {id} below:</h1></div>
  )
}

export default EditItem