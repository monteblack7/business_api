import React from "react";

class Image extends React.Component {
    render() {
        return (
            <div className="row custom">
                <div className="col-md-12">
                    <h1 className="title">Welcome to Jepardy!</h1>
                    <button onClick={() => {
                        this.props.handleClick();
                        this.props.rehide();
                    }} className="btn btn-warning form-control">Random Question</button>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.question}</h3>
                </div>
                <div className="col-md-12">
                    <button onClick={() => {
                        this.props.unhide();
                    }} className="btn btn-danger form-control">Get Answer</button>
                    <h1 className="secret">{this.props.answer}</h1>
                </div>
            </div>
        )
    }
}

export default Image;