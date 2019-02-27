import { get } from '../../request';

async function getShipmentsSummary(from, to) {
    try {
        const estimatedDepartureDate = JSON.stringify({
            estimatedDepartureDate: {
                From: from,
                To: to
            }
        });
        const response = await get(`/reports/shipment-status?filter=${estimatedDepartureDate}`);
        if (response) {
            const jsonRes = await (response.json());
            return jsonRes.data;
        }
    } catch (error) {
        console.log(error);
    }
}

async function getShipmentsForEvent(
    event,
    from,
    to,
    orderBy,
    orderDirection
) {
    const filterCriteria = {};
    if (event)
        filterCriteria.workflowStatus = {
            workflowStatus: event
        };
    if (from && to)
        filterCriteria.estimatedArrivalDate = {
            From: from,
            To: to
        }
    let queryString = "";
    if (filterCriteria.workflowStatus || filterCriteria.estimatedArrivalDate) {
        queryString += `filter=${JSON.stringify(filterCriteria)}`;
    }
    if (orderBy && orderDirection) {
        if (queryString)
            queryString += "&";
        queryString += `orderBy=[[${orderBy},${orderDirection}]]`;
    }
    let url = '/reports/uber-details';
    if (queryString)
        url += `?${queryString}`;
    else {
        //Isn't considered a valid request
        return;
    }
    try {
        const response = await get(url);
        return (await response.json()).data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getShipmentDetails(id) {
    if (id === undefined)
        return;
    try {
        const response = await get(`/api/shipment/${id}`);
        return (await response.json()).data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getShipmentsSummary,
    getShipmentsForEvent,
    getShipmentDetails
};