const ctx = document.getElementById('myChart');

        // Fetch data from the API
        fetch('./financialreport.json')
            .then(response => response.json())
            .then(apiData => {
                // Use the API data to update the chart


                const labels = apiData.financialreport[0].financials.map(entry => entry.date);
        const data = apiData.financialreport[0].financials.map(entry => entry.revenue);

        // console.log(labels);
        // console.log(data);
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Revenue',
                            data: data,
                            borderWidth: 1,
                            
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                anime({
                    targets: chart,
                    duration: 2000,
                    easing: 'easeInOutQuad',
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    delay: anime.stagger(200),
                });

                // Call the function to animate the bar chart
                animateChart(ctx, 'bar', labels, data);
            })
            .catch(error => {
                console.error('Error fetching data from the API:', error);
            });

            const ctxpie = document.getElementById('myChart-pie');

        // Fetch data from the API
        fetch('./financialreport.json')
            .then(response => response.json())
            .then(apiData => {
                // Use the API data to update the chart


                const labels = apiData.financialreport[0].financials.map(entry => entry.date);
        const data = apiData.financialreport[0].financials.map(entry => entry.revenue);

        // console.log(labels);
        // console.log(data);
                new Chart(ctxpie, {
                    type: 'pie',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Revenue',
                            data: data,
                            borderWidth: 1,
                            
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
               
                  

                  // Call the function to animate the pie chart
                  animateChart(ctxpie, 'pie', labels, data);
            })

            
            .catch(error => {
                console.error('Error fetching data from the API:', error);
            });