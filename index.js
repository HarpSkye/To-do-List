function App(){ 
    const [todos, setTodos] = React.useState([
    {
        text: 'clean house',
        isCompleted: false
    },
    {
        text: 'doing laundry',
        isCompleted: false
    },
    {
        text: 'finishing MIT homework',
        isCompleted: false
    },
    {
        text: 'cooking dinner',
        isCompleted: false
    }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }
   
    const removeTodo = text => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return(
        <div className="app">
            <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, i) => <Todo key={i} id={i} todo={todo} remove={removeTodo} />)}
                
            </div>
        </div>
        );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)