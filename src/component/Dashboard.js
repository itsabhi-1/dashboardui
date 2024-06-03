import React from 'react'
// import DoughnutChartComponent from './chart/DoughnutChartComponent';x
import LineChart from '../component/LineChart'
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import PolarChart from '../component/PolarChart';
function Dashboard() {
    return (
        <>
            <div className='main_content'>
                <div className="page_content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="page_title_box">
                                    <h4>Dashboard</h4>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xl-3">
                                <div className="mini-stat card">
                                    <div className="card-body mini-stat-img card_body">
                                        <div className="mini-stat-icon">
                                            <i className="float-end mdi mdi-cube-outline" />
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3 font-size-16 text-white">high risk events</h6>
                                            <h2 className="mb-4 text-white">29</h2>
                                            {/* <span className="badge bg-info"> +11% </span> */}
                                            <span className="ms-2">of 38 total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="mini-stat card">
                                    <div className="card-body mini-stat-img card_body">
                                        <div className="mini-stat-icon">
                                            <i className="float-end mdi mdi-cube-outline" />
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3 font-size-16 text-white">Risky activities</h6>
                                            <h2 className="mb-4 text-white">08</h2>
                                            {/* <span className="badge bg-info"> +11% </span> */}
                                            <span className="ms-2"> of 26 total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="mini-stat card">
                                    <div className="card-body mini-stat-img card_body">
                                        <div className="mini-stat-icon">
                                            <i className="float-end mdi mdi-cube-outline" />
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3 font-size-16 text-white">high risk users</h6>
                                            <h2 className="mb-4 text-white">06</h2>
                                            {/* <span className="badge bg-info"> +11% </span> */}
                                            <span className="ms-2">of 09 total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="mini-stat card">
                                    <div className="card-body mini-stat-img card_body">
                                        <div className="mini-stat-icon">
                                            <i className="float-end mdi mdi-cube-outline" />
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3 font-size-16 text-white">devices with issues</h6>
                                            <h2 className="mb-4 text-white">01</h2>
                                            {/* <span className="badge bg-info"> +11% </span> */}
                                            <span className="ms-2">of 12 total</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Line Graph</h4>
                                        <div className='line_chart_height'>
                                            <LineChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Destination Ports</h4>
                                        <div className='doughnut_chart_height'>
                                            <PolarChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Alerts</h4>
                                        <div className='doughnut_chart_height'>
                                            <BarChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Line Graph</h4>
                                        <div className='doughnut_chart_height'>
                                            <DoughnutChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
