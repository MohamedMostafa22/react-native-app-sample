import React from 'react';
import { connect } from 'react-redux';

import actions from '../../features/dasboard/actions/shipmentsActions';
import PressableList from '../../layout/components/PressableList';

class EventsListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(eventName) {

        const { shipmentEventClicked, loadedShipments, fetchShipmentsByEvents } = this.props;

        shipmentEventClicked(eventName);
        if (!loadedShipments[eventName]) {
            fetchShipmentsByEvents(
                eventName,
                "2018-08-22",
                "2018-11-21",
                "id",
                "desc"
            );
        }
    }

    renderTitle(item) {
        return item.item.status;
    }

    render() {
        return (
            <PressableList
                onPress={this.handleClick}
                data={this.props.shipmentsSummary}
                renderTitle={this.renderTitle}
                keyProperty="status"
                iconProperty="icon"
                idProperty="status"
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        shipmentsSummary: state.shipmentsSummary.shipments,
        loadedShipments: state.shipmentsByEvents
    };
}

function mapDisptachToProps(dispatch) {
    return {
        fetchShipmentsByEvents: actions.startShipmentsForEventFetch(dispatch),
        shipmentEventClicked: actions.shipmentEventClicked(dispatch)
    };
}

export default connect(mapStateToProps, mapDisptachToProps)(EventsListContainer);