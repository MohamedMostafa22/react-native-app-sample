import React from 'react';
import { connect } from 'react-redux';

import PressableList from '../../layout/components/PressableList';

class ShipmentsListContainer extends React.Component {

    renderTitle(item) {
        return item.item.moduleType + item.item.jobNo;
    }

    render() {
        return (
            <PressableList
                data={this.props.shipments}
                onPress={() => { }}
                renderTitle={this.renderTitle}
                idProperty="id"
                keyProperty="id"
            />
        );
    }

}

function mapStateToProps(state) {
    return {
        shipments: state.shipmentsByEvents[state.shipmentsByEvents.currentlySelected]
    }
}

export default connect(mapStateToProps)(ShipmentsListContainer);