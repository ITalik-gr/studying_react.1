const[count, setCount] = useState(0)

return e('div', {className: "container"}, [
  e('h1', {className: 'font-bold', key: 1}, `Text JSX ${count}`),
  e('button', {className: 'py-2 px-4 border', key: 2, 
  onClick: () => setCount(count + 1)
}, 'Click Me!')
])