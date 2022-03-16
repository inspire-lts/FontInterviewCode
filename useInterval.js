function useInterval(func) {
  const ref = useRef(null)
  ref.current = (() => func)
  useEffect(() => {
    let id = setInterval(() => {
      ref.current()
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [input])
}