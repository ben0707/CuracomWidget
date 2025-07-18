let lastUrl = location.href
export const useUrlChangeHandler = (callback: Function = (currentUrl: string) => {}) => {
  const handleUrlChange = () => {
    const currentUrl = location.href
  }

  history.pushState = (...args) => {
    const result = history.pushState.apply(history, args)
    // handleUrlChange() // Check after state change
    return result
  }

  // history.replaceState = (...args) => {
  //   const result = history.replaceState.apply(history, args)
  //   handleUrlChange() // Check after state change
  //   return result
  // }

  // patchHistoryMethod('pushState')
  // patchHistoryMethod('replaceState')

  // Also listen to popstate (back/forward browser buttons)
  window.addEventListener('popstate', handleUrlChange)

  // Optional: detect hash changes
  window.addEventListener('hashchange', handleUrlChange)
}
