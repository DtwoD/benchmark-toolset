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

Open JMeter ```jmeter```