import { memo } from "react"

const TodoAddInput = () =>{
    return(<input type="text" placeholder="Enter your todo" id="todoAddInput" />)
}

export default memo(TodoAddInput)