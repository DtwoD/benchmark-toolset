### Dev Benchmark Toolset

### Performance Tunning

##### Mule4 Execution Engine
Mule4 new execution with non-blocking runtime. Avoid performance problems due to incorrect processing strategy. Based on reactive programing.

Mule Event processors indicate to the runtime whether they are CPU intensive, CPU light and IO intensive operations.

The default class-loading mechanism of the JVM makes it possible to have conflicting versions of the same JAR files.

 
Test payload and transaction rate on multiple runtime configurations to determine the best fit:

Config1: [6x 0.1vCores]
Config2: [4x 0.2vCores]
Config3: [2x 1cCores]
Config4: [1x 2vCores]

Characteristics of CloudHub: 
- Application Isolation
- Multiple Workers
- Fractional vCores(0.1, 0.2) have Bursting Capability
- Automatic Load Balancing. 

```
[%header,cols="3*a"]
|===
|Worker Size |Heap Memory | Storage
|0.1 vCores |500 MB | 8 GB
|0.2 vCores |1 GB | 8 GB
|1 vCore |1.5 GB | 12 GB
|2 vCores |3.5 GB | 40 GB
|4 vCores |7.5 GB | 88 GB
|8 vCores |15 GB | 168 GB
|16 vCores |32 GB | 328 GB
|===
```

Different tools for troubleshoot typical issues: 
- CPU issues
- Memory issues
- Disk issues
- Network issues
- Connection issues
- Token expiration issues

### Typical Issues: CPU

Make sure CPU is the real reason.
- A failing backend system can cause the Application to loop(retries)
- Lack of memory can cause the CPU to race

##### Troubleshoot
1- For on-premise runtimes, look for the top CPU consuming threads
2- For CloudHub
    a: Sizing can be an issue since the CPU burst credits expire for 0.1 and 0.2 vcores. 

### Typical Issues: Memory

- Batch job tested with small payloads during dev is now tested with realistic payloads
- Custom code contains a Memory Leak
- Resources not released
- Java Heap Size too small
- Too many Threads

##### Troubleshoot
USe the Support information collector KB to collect the Heap Dumps and the the runtimes

### Typical Issues: Disk
- Default Batch Expiration
    - <batch:expiration max-age="7" age-unit="DAYS">
- Temp Files


#### Typical Issues: Network
Large payload/High TPS (Transaction Per Second)
- CPU and Memory are below 25%
- Response Times are too long
- Moving to a larger worker doesn't have significant impact
- Multiple smaller workers solve the issue

### Performance Tunning Process

1[TEST] <- JMeter, k6, LoadRunner, SoapUI
.
.
2[MONITOR] <- Top, VisualVM
.   ==============> [PROFILE] <- Heap Dumps, Profiler
.                    .
.                    .
.                   [TUNE / PATCH]
3[MEASURE]
.
.
4[TUNE]

### Resources
Muley
(Mulesoft Performance Profiling)[https://www.youtube.com/watch?v=Nw-9dT6toDQ&ab_channel=VirtualMuleys]
(Advanced Troubleshooting)[https://www.youtube.com/watch?v=HDWuDV1zaMU&ab_channel=VirtualMuleys]