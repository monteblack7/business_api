import React from "react";
import Image from "../components/image";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions";

class ImageContainer extends React.Component {
    unhideAnswer(){
        document.querySelector(".secret").style.display = "inline";
    }
    rehideAnswer(){
        document.querySelector(".secret").style.display = "none";
    }
    render() {
        console.log(this.props.title);
        return (
            <div className="container">
                <Image rehide={this.rehideAnswer} unhide={this.unhideAnswer} title={this.props.title} question={this.props.question} answer={this.props.answer} handleClick={this.props.getData} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);