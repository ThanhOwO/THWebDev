import React from 'react'

class MySection extends React.Component{
    render() {
        return (
            <section>
                <h1 style={{color: "red"}}>Ex0.3</h1>
                <h2>My Section</h2>
                {this.props.children}
            </section>
        )
    }
}

export default MySection;