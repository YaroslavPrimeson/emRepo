import React from "react";

export default class App extends React.Component {
    /** ====================================================================================================
     *              Main
     =====================================================================================================*/
    constructor (props, context) {
        super(props, context);
        this.state = {
            show: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true})
        }, this.props.timeOutShow * 1000);
    }

    render() {
        return (
            <>
                {this.state.show && (
                    <svg
                        className={this.props.className}
                        style={this.props.style}
                        viewBox={this.props.viewBox}
                        transform={this.props.transform}
                    >
                        {this.props.path}
                    </svg>
                )}
            </>
        )
    }
}