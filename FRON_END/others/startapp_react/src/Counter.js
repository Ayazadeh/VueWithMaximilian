function Counter() {

    const count = [
        1, 2, 3, 4, 5
    ]

    const status = true
    
    return (
        <div className="Counter">
            { status && count.map(count => (
            <button>{count}</button>
            ))}
        </div>
    );
}

export default Counter;
