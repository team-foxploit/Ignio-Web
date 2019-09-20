// Create Data Set
function createDataSet(data, deviceId) {
    // console.log(data, deviceId);
    var dataSet = {
        co_ppmDataSet: {
            labels: [],
            datasets: [
                {
                    label: "CO ppm",
                    data: []
                }
            ]
        },
        lp_gas_ppmDataSet: {
            labels: [],
            datasets: [
                {
                    label: "LP Gas ppm",
                    data: []
                }
            ]
        },
        particle_ppmDataSet: {
            labels: [],
            datasets: [
                {
                    label: "Particle ppm",
                    data: []
                }
            ]
        },
        temperatureDataSet: {
            labels: [],
            datasets: [
                {
                    label: "Temperature",
                    data: []
                }
            ]
        }
    }

    for (const sensorDataByDeviceArray in data) {
        if (data.hasOwnProperty(sensorDataByDeviceArray)) {
            const deviceData = data[sensorDataByDeviceArray];
            // console.log(deviceData);
            deviceData.forEach(sensorData => {
                // console.log(sensorData);
                for (const key in sensorData) {
                    // console.log(key);
                    if (key.includes("ppm") || key.includes("temp")) {
                        const reading = sensorData[key];
                        const epoch = sensorData["epoch"];
                        // console.log(key);
                        // console.log(key, reading);
                        // console.log(dataSet[key+"DataSet"]["datasets"].push(reading));
                        // console.log(dataSet[key+"DataSet"]["labels"].push(epoch));
                        dataSet[key+"DataSet"]["datasets"][0]["data"].push(reading)
                        dataSet[key+"DataSet"]["labels"].push(epoch)
                    }
                }
            });
        }
    }
    // console.log(dataSet);
    return dataSet;
}

module.exports = {
    createDataSet // Create data set for charts
};