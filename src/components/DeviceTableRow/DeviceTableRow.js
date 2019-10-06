import React from 'react';

import {
    Badge,
    Progress,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown
} from "reactstrap";
import { NavLink } from "react-router-dom";

const DeviceTableRow = (props) => {
    console.log(props);
    const latestData = props.deviceData[props.deviceData.length - 1];
    var diff =(new Date().getTime() - new Date(latestData.epoch).getTime()) / 1000;
    diff /= 60;
    const diffInMinutes = Math.abs(Math.round(diff));
    const isActive = diffInMinutes < 2;
    console.log(latestData);
    console.log(diffInMinutes);
    console.log(isActive);
    
    return (
        <tr>
            <th scope="row">
                <i className="ni ni-box-2 mr-3"></i>
                {latestData.deviceId ?
                    latestData.deviceId
                    :
                    null
                }
            </th>
            <td>
                <Badge color="" className="badge-dot mr-4">
                    {isActive ? 
                            <>
                                <i className="bg-info" />
                                Active
                            </>
                            :   
                            <>
                                <i className="bg-danger" />
                                Not Active
                            </>
                    }
                </Badge>
            </td>
            <td>
                {latestData.epoch ?
                    new Date(latestData.epoch).toLocaleString()
                    :
                    null
                }
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        {/* <NavLink to="/admin/settings" className="text-dark"> */}
                            View Device
                        {/* </NavLink> */}
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
}

export default DeviceTableRow;