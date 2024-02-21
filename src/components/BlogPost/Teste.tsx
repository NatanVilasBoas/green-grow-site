import React from "react";

class Teste extends React.Component<{texto : string}>{
    render(){
        return(
            <>
                {this.props.texto}
            </>
        )
    }
}