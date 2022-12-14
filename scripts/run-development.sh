docker network create isocial-network -d bridge && \\
cd ./api-gateway && docker-compose up -d --build isocial_api_gateway_dev && \\
cd ../microservices/users-service && docker-compose up -d --build isocial_users_service_api_dev
# cd ../microservices/posts-service && docker-compose up -d --build isocial_posts_service_dev && \\
# cd ../microservices/pages-service && docker-compose up -d --build isocial_pages_service_dev