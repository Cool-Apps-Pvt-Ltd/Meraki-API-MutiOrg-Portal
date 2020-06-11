import React from "react";
import WifiIcon from '@material-ui/icons/Wifi';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import VpnLockIcon from '@material-ui/icons/VpnLock';

// Material Table Icons
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const ClientsDetailed = (props) => {
    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                title={"Last " + props.timeframe + " s"}
                actions={[
                    {
                        icon: SaveAlt,
                        tooltip: 'Save',
                        onClick: (event, rowData) => {
                            // Do save operation
                        }
                    },
                    {
                        icon: Edit,
                        tooltip: 'Edit',
                        onClick: (event, rowData) => {
                            // Do save operation
                        }
                    }
                ]}
                options={{
                    sorting: true,
                    filtering: true
                }}
                columns={[
                    { title: "Status", field: "status", width: 2, filtering: false },
                    { title: "Device Name", field: "name" },
                    { title: "MAC", field: "mac" },
                    { title: "IP", field: "ip"},
                    { title: "Usage", field: "usage", filtering: false, searching: false},
                ]}
                data={props.clientList.map((entry, index) => {
                    return ({
                        status: <WifiIcon style={entry.status==='Online' ? {color: 'limegreen'}: {color: 'red'}} />,
                        name: entry.description,
                        mac: entry.mac,
                        ip: entry.ip,
                        usage: (entry.usage.sent + entry.usage.recv) < 1024 ?
                            Math.ceil( (entry.usage.sent + entry.usage.recv)) + " KB" :
                            (entry.usage.sent + entry.usage.recv)/1024 < 1024 ?
                                Math.ceil( (entry.usage.sent + entry.usage.recv)/1024) + " MB" :
                                Math.ceil( (entry.usage.sent + entry.usage.recv)/1024/1024) + " GB"
                    })
                })}>
            </MaterialTable>
        </div>
    )
}

export default ClientsDetailed;