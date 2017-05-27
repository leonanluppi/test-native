import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {
    Button,
	Text,
	View
} from 'react-native'; 

import Styles from './Styles/CounterStyles'
import IpAddressActions from '../Redux/IpAddressRedux'

class IpAddressComponent extends Component { 

    static PropTypes = {
		getIp: PropTypes.func
    }

    constructor(props){
        super(props);
    }

    handlePressGetIp = () => {
        this.props.helloWorld();
    }

    render () {
        const { ip: string } = this.props

        return (
            <View style={ Styles.wrapper }>
				<Text>{ this.ip }</Text>
				<Button
					onPress={ this.handlePressGetIp }
					title="Get Ip"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ip : state.ip
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        helloWorld : ()  =>  dispatch(IpAddressActions.helloWorld())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IpAddressComponent);