function useDebounce(value, delay = 300) {
  [debounce, setDebounce] = useState(value)

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounce(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
}