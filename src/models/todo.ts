class Todo{
    // TS cần xác định trước kiểu dữ liệu nên phải khai báo ntn trước constructor
    id: string;
    text: string;

    constructor(todoText:string) {
        this.id = new Date().toISOString();
        this.text = todoText
    }
}

export default Todo