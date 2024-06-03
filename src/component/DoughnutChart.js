import React from 'react';
 import DoughnutChartComponent from './chart/DoughnutChartComponent';

const DoughnutChart = () => {
    const jsonData = [
        {
            "timestamp": "2019-01-02T03:50:09.097718",
            "flow_id": 52373568,
            "in_iface": "eth0",
            "event_type": "alert",
            "src_ip": "8.42.77.171",
            "src_port": 65036,
            "dest_ip": "138.68.3.71",
            "dest_port": 3306,
            "proto": "TCP",
            "alert": {
                "action": "allowed",
                "gid": 1,
                "signature_id": 2010937,
                "rev": 3,
                "signature": "ET SCAN Suspicious inbound to mySQL port 3306",
                "category": "Potentially Bad Traffic",
                "severity": 2
            }
        },
        {
            "timestamp": "2019-01-02T03:50:10.386108",
            "flow_id": 52491840,
            "in_iface": "eth0",
            "event_type": "alert",
            "src_ip": "8.42.77.171",
            "src_port": 65386,
            "dest_ip": "138.68.3.71",
            "dest_port": 5915,
            "proto": "TCP",
            "alert": {
                "action": "allowed",
                "gid": 1,
                "signature_id": 2002911,
                "rev": 5,
                "signature": "ET SCAN Potential VNC Scan 5900-5920",
                "category": "Attempted Information Leak",
                "severity": 2
            }
        },
        {
            "timestamp": "2019-01-02T03:53:24.798186",
            "flow_id": 53053968,
            "in_iface": "eth0",
            "event_type": "alert",
            "src_ip": "80.211.246.121",
            "src_port": 5130,
            "dest_ip": "138.68.3.71",
            "dest_port": 5060,
            "proto": "UDP",
            "alert": {
                "action": "allowed",
                "gid": 1,
                "signature_id": 2403451,
                "rev": 46061,
                "signature": "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 76",
                "category": "Misc Attack",
                "severity": 2
            }
        }
    ];

    return (
        <div>
            <DoughnutChartComponent data={jsonData} />
        </div>
    );
};

export default DoughnutChart;