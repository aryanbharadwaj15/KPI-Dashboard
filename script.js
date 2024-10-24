// Line Chart (User Statistics)
const userStatsChart = document.getElementById('userStatsChart').getContext('2d');
const userStats = new Chart(userStatsChart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'New Users',
            data: [1200, 1400, 1600, 1800, 2000, 2200],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Bar Chart (Financial Metrics)
const financialMetricsChart = document.getElementById('financialMetricsChart').getContext('2d');
const financialMetrics = new Chart(financialMetricsChart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue ($)',
            data: [10000, 12000, 15000, 14000, 16000, 18000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart (Device Usage)
const deviceUsageChart = document.getElementById('deviceUsageChart').getContext('2d');
const deviceUsage = new Chart(deviceUsageChart, {
    type: 'pie',
    data: {
        labels: ['Mobile', 'Desktop', 'Tablet'],
        datasets: [{
            label: 'Device Usage',
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


// Doughnut Chart (Sales Distribution)
const salesDistributionChart = document.getElementById('salesDistributionChart').getContext('2d');
const salesDistribution = new Chart(salesDistributionChart, {
    type: 'doughnut',
    data: {
        labels: ['Electronics', 'Furniture', 'Groceries', 'Clothing'],
        datasets: [{
            label: 'Sales Distribution',
            data: [35, 25, 20, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
