import React from 'react';

export class Lists extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.items.map((item) => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        );
    }
}