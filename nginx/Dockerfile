FROM nginx:alpine

# default.conf in the same directory To docker env /etc/... 
COPY default.conf /etc/nginx/conf.d/default.conf

# Generate the Blue Container which runs infinitely
RUN echo "upstream backend { server app-blue:8080; }" > /etc/nginx/conf.d/upstream.inc
