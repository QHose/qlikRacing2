FROM node:4.8.3
# Set one or more individual labels
LABEL maintainer="Martijn Biesbroek"
EXPOSE 3000

# we assume your bundle dir is the current dir on the docker host, lets copy it to the container
# so in my case . refers to C:\Users\Qlikexternal\Documents\GitHub\QRSMeteor\.build\bundle
# in the container we will create a new directory qlikRacingRTA and copy the contents of C:\Users\Qlikexternal\Documents\GitHub\QRSMeteor\.build\bundle to it. 
ADD . /qlikRacingRTA  

# cd into the new directory, and go to the server folder
WORKDIR /qlikRacingRTA/programs/server

# make sure all the NPM modules are downloaded again (via the settings in the package.json file in the server bundle\...\server folder)
RUN npm install \
  && npm cache clear

# cd to the dir where the startup script is
WORKDIR /qlikRacingRTA

## the settings.json file has been linked (via a volume from windows to linux) to the /qlikRacingRTA/config directory. startNode.sh will execute node including the settings.json
CMD ["bash", "./startNode.sh"]