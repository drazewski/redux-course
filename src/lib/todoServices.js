export const getTodos = () => {
    return fetch('http://localhost:8000/todos')
        .then(res => res.json())
}