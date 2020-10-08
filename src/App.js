import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

// Personal note: At the time I took the course, I had React v.16.13.1

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    

    


    // WEIRD ONES
    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }
    
    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }

    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }







    // DEPRECATED
    // componentWillMount() {
    // }
  
    // componentWillUpdate() {
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }

    






    // This is the most useful Lifecycle Method (as well as the one called render)
    componentDidMount() {
        // GET the data I need to correctly display
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App
