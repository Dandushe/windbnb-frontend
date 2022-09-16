


export class LongText extends React.Component {

    state = {
        isLongShown: false,
        limit: 40
    }

    onToggleShown = () => {
        // let isLongShownCopy = this.state.isLongShown
        // isLongShownCopy = !isLongShownCopy

        // this.setState({ isLongShown: isLongShownCopy })
        this.setState(prevState => ({ ...prevState, isLongShown: !prevState.isLongShown }))
    }

    get buttonText() {
        const { isLongShown } = this.state
        return isLongShown ? 'Read less' : '...Read More'
    }

    get cropedText() {
        const { isLongShown, limit } = this.state
        const { text } = this.props
        return isLongShown ? text : text.substr(0, limit)
    }

    render() {
        return (
            <div className="long-text">
                {this.cropedText}
                <button className="btn read-more-less" onClick={this.onToggleShown}>{this.buttonText}</button>
            </div>
        )
    }
}
