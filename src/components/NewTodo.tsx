import React, { useRef } from 'react'

const NewTodo = () => {
    // TS luôn ép kiểu dữ liệu, nên khi dùng với
    // các hook thì cần lưu ý <>
    const todoTextInput = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        // Bởi Ts k hiểu là bên dưới chỉ xảy ra khi ấn submit
        // nên nó check cả TH dữ liệu đến current bị null
        // nó sẽ tự động thêm dấu ? nếu chắc chắn 100%
        // thì thay bằng !
        const enteredText = todoTextInput.current!.value;
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type={'text'} id="text" ref={todoTextInput} />
            <button>Add todo</button>
        </form>
    )
}

export default NewTodo