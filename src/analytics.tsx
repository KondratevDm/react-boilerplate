function createAnalytics(): object {
    let counter = 0
    let destroyed = false

    const listener = (): number => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            destroyed = true
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}
export default createAnalytics
// window['analytics']  = createAnalytics()