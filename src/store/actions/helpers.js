// -- Helper Functions for robust state management -- //

/*
*  -- Resolve device data updates
*/
export const resolveDataUpdate = (getState, data) => {

    // Get the deviceIds and deviceData from the state
    var deviceIds = getState().data.deviceIds;
    var deviceData = getState().data.deviceData;

    if (deviceIds.includes(data.deviceId)) {
        const deviceIndex = deviceIds.indexOf(data.deviceId);
        console.log("[resolveDataUpdate] Execute UPDATE!");
        deviceData[deviceIndex] = data;
    } else {
        console.log("[resolveDataUpdate] Execute, APPEND!");
        deviceIds = [
            ...deviceIds,
            data.deviceId
        ];
        deviceData = [
            ...deviceData,
            data
        ];
    }
    return {
        deviceIds,
        deviceData
    };
    
}