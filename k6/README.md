### k6
Open source load testing tool and SaaS for engineering teams

(Running local tests)[https://k6.io/docs/getting-started/running-k6]
```
k6 run k6/postDataToCloudHubFromFile.js 
```

Adding more Virtual Users (VU)
```
k6 run --vus 10 --duration 30s k6/postDataToCloudHubFromFile.js 
```