import { FaRegTrashAlt } from "react-icons/fa";

interface Props{
    id:number,
    name:string,
    setLabels:Function
}
const Label = ({ id, name, setLabels }:Props) => {
    const handleRemoveLebel=()=>{
        setLabels((prev:LabelPost[])=>prev.filter((label)=>label.id!==id))
    }
  return (
    <div className='flex items-center gap-2'>
        <div className='bg-red-500 text-slate-100 px-4 py-2 shadow-md shadow-slate-500 rounded'>
            {name}
        </div>
        <button type="button" onClick={handleRemoveLebel} className="text-2xl hover:text-3xl transition-all duration-100 cursor-pointer">
            <FaRegTrashAlt />
        </button>
    </div>
  )
}

export default Label
