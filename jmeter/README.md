### JMeter



#### Set up your environment
brew update
brew install jmeter

Check on console: ```JMeter -v```
```
==> Pouring jmeter-5.3.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/jmeter/5.3: 2,620 files, 120.3MB

 ~  JMeter -v                                                                                                                ✔ │ 46s 
WARNING: package sun.awt.X11 not in java.desktop
    _    ____   _    ____ _   _ _____       _ __  __ _____ _____ _____ ____
   / \  |  _ \ / \  / ___| | | | ____|     | |  \/  | ____|_   _| ____|  _ \
  / _ \ | |_) / _ \| |   | |_| |  _|    _  | | |\/| |  _|   | | |  _| | |_) |
 / ___ \|  __/ ___ \ |___|  _  | |___  | |_| | |  | | |___  | | | |___|  _ <
/_/   \_\_| /_/   \_\____|_| |_|_____|  \___/|_|  |_|_____| |_| |_____|_| \_\ 5.3

Copyright (c) 1999-2020 The Apache Software Foundation
```


Download (jar of plugin manage)[https://jmeter-plugins.org/install/Install/] and copy for the extension folder of Jmeter in your machine

cp ~/Downloads/jmeter-plugins-manager-1.4.jar /usr/local/Cellar/jmeter/5.3/libexec/lib/ext/

Add ENVIRONMENT VARIABLES (optional) to ~/.bash_profile
```
JMETER_HOME — /usr/local/Cellar/jmeter/5.3
set JMETER_HOME=’/usr/local/Cellar/jmeter/5.3'
export JMETER_HOME=’/usr/local/Cellar/jmeter/5.3'
```

Open JMeter on command line: ```jmeter```

Add the following JVM paremeters to avoid OutOfMemory on JMeter: 
 
```set HEAP="-Xms8g -Xmx8g -XX:MaxMetaspaceSize=512m" && ./jmeter.sh```

Default (1Gb, 256 Metaspace):
``` 
Don’t use GUI mode for load testing !, only for Test creation and Test debugging.
For load testing, use CLI Mode (was NON GUI):
  jmeter -n -t [jmx file] -l [results file] -e -o [Path to web report folder]
& increase Java Heap to meet your test requirements:
  Modify current env variable HEAP="-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m" in the jmeter batch file
```

In this folder you can find some .jmx files that can be opened on JMeter or used on the command line execution. 

210_X12_CloudHub_2_5_1_and_3_0_0.jmx points to CloudHub v0.1Core(1Worker - 500 MB Heap) and another one point to localhost.

The message is very small just to compare response speed, not load test(40MB, 100MB, 1GB).

jmeter -n –t NAME_OF_FILE.jmx -l RESULTS_FILE_NAME.jtl
jmeter -n –t 210_X12_Localhost_8081_2_5_1_and_3_0_0.jmx -l testresults.jtl

-n: It specifies JMeter is to run in non-gui mode
-t: Name of JMX file that contains the Test Plan
-l: Name of JTL(JMeter text logs) file to log results
-j: Name of JMeter run log file

```
 /usr/local/Cellar/jmeter/5.3/libexec/bin  jmeter -n -t /Users/jhony.oliveira/dev/mulesoft/mulesoft-labs/benchmark-toolset/jmeter/210_X12_Localhost_8081_2_5_1_and_3_0_0.jmx -l testresults.jtl

Creating summariser <summary>
Created the tree successfully using /Users/jhony.oliveira/dev/mulesoft/mulesoft-labs/benchmark-toolset/jmeter/210_X12_Localhost_8081_2_5_1_and_3_0_0.jmx
Starting standalone test @ Fri Sep 18 14:54:21 ART 2020 (1600451661316)
Waiting for possible Shutdown/StopTestNow/HeapDump/ThreadDump message on port 4445
summary =   1000 in 00:00:06 =  154.5/s Avg:   112 Min:     9 Max:   691 Err:     0 (0.00%)
Tidying up ...    @ Fri Sep 18 14:54:28 ART 2020 (1600451668011)
... end of run
```