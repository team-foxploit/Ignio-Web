import React from 'react';

const DeviceDetailRow = (props) => {
    // console.log(props);
    const { deviceId, ownerId, created, purchased } = props.deviceData;
    return (
        <tr>
            <th scope="row">
                {deviceId ?
                    <>
                        <i className="ni ni-box-2 mr-3"></i>
                        {" "} {deviceId}
                    </>
                    :
                    null
                }
            </th>
            <td className="text-center">
                {created ?
                    new Date(created).toLocaleString()
                    :
                    null
                }
            </td>
            <td className="text-center">
                {ownerId ? 
                    ownerId
                    :   
                    null
                }
            </td>
            <td className="text-center">
                {purchased ?
                    new Date(purchased).toLocaleString()
                    :
                    null
                }
                
            </td>
        </tr>
    );
}

export default DeviceDetailRow;