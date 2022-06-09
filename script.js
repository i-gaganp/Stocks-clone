
            const labels = [
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
            ];
      
        const data = {
            labels: labels,
            datasets: [{
                label: 'Earnings',
                backgroundColor: 'rgb(83, 120, 255, 0.5)',
                borderColor: 'rgb(83, 120, 255, 0.5)',
                data: [140, 210, 170, 220, 0, 226, 130, 180, 160, 210, 190, 235],
            }]
            };
      
        const config = {
            type: 'line',
            data: data,
            options: {}
            };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
            );