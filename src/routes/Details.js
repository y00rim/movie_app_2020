import React from 'react';
import { render } from '@testing-library/react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state){
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }

    render() {
        const {location} = this.props;
        return <span>{location.state.title}</span>;
    }
}


export default Detail;