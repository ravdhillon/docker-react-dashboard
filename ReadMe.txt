=====================================================================
Project
=====================================================================
This is simple NodeJS web application which will track the 
visitors to the site.
The counter will be incremented when someone visits the page.
Now we can use Redis to store our counter and NodeJS server to
render the pages.

=====================================================================
Deployment Scenario
=====================================================================
1. Redis and NodeJS in same container. 
This configuration is okay for one instance, but when we try to scale up
this configuration may not work as expected. The reason is that each container will maintain separate Redis Cache and will
provide inconsistent results.

2. Separate Containers for NodeJS and RedisCache.
we can have multiple NodeJS containers talking to ONLY ONE Redis container. This configuration can be scaled
without any issues as we have centralized the cache and every container will refer to same information.
