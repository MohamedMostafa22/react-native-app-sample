import React from 'react';
import shipmentActions from '../../features/dasboard/actions/shipmentsActions';
import { connect } from 'react-redux';

import EventsList from './EventsListContainer';
import ShipmentsList from './ShipmentsListContainer';
import withGeneralLayout from '../../layout/hocs/withGeneralLayout';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getShipmentsSummary(
            '2018-09-22',
            '2018-11-21',
        );
    }

    render() {
        return (
            <EventsList />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getShipmentsSummary: shipmentActions.startShipmentsSummaryFetch(dispatch),
        getShipmentsForEvent: shipmentActions.startShipmentsForEventFetch(dispatch)
    };
}

export default withGeneralLayout(connect(null, mapDispatchToProps)(Dashboard));