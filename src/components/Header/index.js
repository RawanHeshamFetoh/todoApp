import './style.css'
import { useDispatch , useSelector } from 'react-redux'
import { updateList, updateSelectList, updateTitle } from '../../Store'
import { useState , useEffect} from 'react'
export default function Header(){
    const [inputTitle , setInputTitle]=useState('')
    const [inputList , setInputList]=useState([])
    const [inputSelect , setInputSelect]=useState('text')
    const title = useSelector((state)=>state.title)
    const list = useSelector((state)=>state.list)
    const selectList = useSelector((state)=>state.selectList)

    const dispatch = useDispatch()
    const handleTitle= (e)=>{
        setInputTitle( e.target.value)
    }
    const handleinputList= (e)=>{
        setInputList( e.target.value)
    }
    const handleSelect=(e)=>{
        setInputSelect(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputTitle.trim() && inputList.trim()){
        dispatch(updateTitle(inputTitle))
        dispatch(updateList(inputList))
        dispatch(updateSelectList(inputSelect))
        }
        console.log(selectList)
    }
    
    useEffect(() => {
        console.log(inputSelect);  // This will log the updated value when inputSelect changes
    }, [inputSelect]);

    return(
        <header>
            <h1>todo App</h1>
            <form action="#" onSubmit={handleSubmit}>
                <div className="title">
                    <p>title </p>
                    <input type="text" name="title" defaultValue={inputTitle} onChange={handleTitle}  />
                </div>
                <div className="title">
                    <select name="todoType" id="todoType" onChange={handleSelect} >
                        <option value="text" defaultValue> text</option>
                        <option value="todo"> todo</option>
                    </select>
                        <div>
                            <textarea name="todoText" id="todoText" defaultValue={inputList} onChange={handleinputList}></textarea>
                        </div>
                </div>
                <input type="submit" value="add" />
            </form>
        </header>
    )
}