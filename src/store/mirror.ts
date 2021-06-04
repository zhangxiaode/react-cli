import mirror, { actions, connect } from 'mirrorx'

mirror.model({
    name: 'app',
    initialState: 0,
    reducers: {
        increment(state: number) { return state + 1 },
        decrement(state: number) { return state - 1 }
    },
    effects: {
        async incrementAsync() {
            await new Promise((resolve: Function, reject: Function) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
            actions.app.increment()
        }
    }
})

export default connect((state: any) => state)