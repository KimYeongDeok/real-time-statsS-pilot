real-time-statsS-pilot
======================

Real-time Analytics Pilot Project on SNS Big Data

http://www.facebook.com/groups/realtimecep/
http://www.facebook.com/groups/jbossusergroup/

See http://storm-project.net

See http://esper.codehaus.org/tutorials/tutorial/quickstart.html

See http://tedwon.com/display/dev/CEP

See http://tedwon.com/display/dev/Twitter+Storm


Prerequisites for Building
-------------------

Java JDK 1.6

Maven 2.2 or higher (http://maven.apache.org/)



Build
-------------------

$ mvn clean package



Run
-------------------

$ mvn compile exec:java -Dexec.classpathScope=compile -Dexec.mainClass=com.realtimecep.pilots.analytics.sns.TopologyStarter -Dexec.args="<twitter id> <twitter pwd>"