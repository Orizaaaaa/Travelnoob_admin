'use client'
import React, { useEffect, useRef, useState } from 'react'
import Chart from "chart.js/auto";

type Props = {}

const LineChart = (props: Props) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<"line"> | null>(null);
    const donutChartRef = useRef<HTMLCanvasElement | null>(null);
    const donutChartInstanceRef = useRef<Chart<"doughnut"> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");

        if (ctx) {
            // Destroy existing chart instance
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Create new chart instance with two datasets (lines)
            chartInstanceRef.current = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ],
                    datasets: [
                        {
                            label: "Total Pengguna",
                            data: [10, 17, 30, 15, 20, 25, 33, 10, 20, 20],
                            borderColor: "#883DCF",
                            borderWidth: 2,
                        },
                        {
                            label: "Posko",
                            data: [
                                5, 15, 25, 33, 34, 12, 67, 33, 12, 10, 40, 50, 20, 40, 30,
                            ],
                            borderColor: "#F86624",
                            borderWidth: 2,

                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                    plugins: {
                        legend: {
                            position: "top",
                            align: "end",
                            labels: {
                                usePointStyle: true,
                                generateLabels: function (chart: any) {
                                    const labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                                    labels.forEach((label: any) => {
                                        if (label.text === "Total Pengguna") {
                                            label.fillStyle = "#883DCF";
                                        } else if (label.text === "Posko") {
                                            label.fillStyle = "#F86624";
                                        }
                                    });
                                    return labels;
                                },

                            },
                        },
                        title: {
                            display: true,
                            text: "Statistik ",
                            font: {
                                size: 20,
                            },
                            color: "black",
                            position: "top",
                            align: "start",
                            padding: 20
                        },
                        subtitle: {
                            display: true,
                            text: "Dari Pengguna dan Posko",
                            font: {
                                size: 14
                            },
                            align: "start",

                        }
                    },
                },
            });
        }

        const donutCtx = donutChartRef.current?.getContext("2d");
        if (donutCtx) {
            // Destroy existing donut chart instance
            if (donutChartInstanceRef.current) {
                donutChartInstanceRef.current.destroy();
            }


            // Create new donut chart instance
            donutChartInstanceRef.current = new Chart(donutCtx, {
                type: "doughnut",
                data: {
                    labels: ['Donatur', 'Pengambilan Makanan'],
                    datasets: [
                        {
                            data: [90, 100],
                            backgroundColor: ["#883DCF", "#F86624"],
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    radius: "75%",
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "bottom",
                            align: "center",
                            labels: {
                                usePointStyle: true,
                            },
                        },
                        title: {
                            display: true,
                            text: "Pelaporan",
                            font: {
                                size: 16,
                            },
                            color: "black",
                            position: "top",
                            align: "start",
                            padding: 10
                        },

                        subtitle: {
                            display: true,
                            text: "Donatur & Pengambilan Makanan  ",
                            font: {
                                size: 14,
                            },
                            align: "start",
                        }

                    },
                },
            });
        }

    }, []);
    return (
        <div className="chart grid grid-cols-3 space-x-4 ">
            <div className="line col-span-2 bg-white shadow-6 p-3">
                <canvas ref={chartRef} ></canvas>
            </div>
            <div className="donut col-span-1 bg-white shadow-6 p-3">
                <canvas ref={donutChartRef} ></canvas>
            </div>
        </div>
    )
}

export default LineChart