# FROM openjdk:17-oracle AS build

# WORKDIR /app

# # Copy maven executable to the image
# COPY mvnw .
# COPY .mvn .mvn

# # Copy the pom.xml file
# COPY pom.xml .


# #Build all the dependencies in preparation to go offline. 
# # This is a separate step so the dependencies will be cached unless 
# # the pom.xml file has changed.
# RUN ./mvnw dependency:go-offline -B

# # Copy the project source
# COPY src src

# # Package the application
# RUN ./mvnw package
# RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


# #### Stage 2: A minimal docker image with command to run the app 
# FROM openjdk:17-oracle

# ARG DEPENDENCY=/app/target/dependency

# # Copy project dependencies from the build stage
# COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
# COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
# COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
 
# ENTRYPOINT ["java","-cp","app:app/lib/*","com.example.BackendApplication"]

# FROM openjdk:17-oracle AS build

# WORKDIR /app

# # Copy maven executable to the image
# COPY mvnw .
# COPY .mvn .mvn

# # Make sure the Maven wrapper is executable
# RUN chmod +x ./mvnw

# # Copy the pom.xml file
# COPY pom.xml .

# # Build all the dependencies in preparation to go offline. 
# RUN ./mvnw dependency:go-offline -B

# # Copy the project source
# COPY src src

# # Package the application
# RUN ./mvnw package -DskipTests
# RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# #### Stage 2: A minimal docker image with command to run the app 
# FROM openjdk:17-oracle

# ARG DEPENDENCY=/app/target/dependency

# # Copy project dependencies from the build stage
# COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
# COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
# COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

# ENTRYPOINT ["java","-cp","app:app/lib/*","com.example.BackendApplication"]

# Stage 1: Build the application
FROM openjdk:17-oracle AS build

WORKDIR /app

# Copy maven executable and pom.xml file
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Make sure the Maven wrapper is executable
RUN chmod +x ./mvnw

# Build all the dependencies in preparation to go offline. 
RUN ./mvnw dependency:go-offline -B

# Copy the project source
COPY src src

# Package the application without running tests
RUN ./mvnw package -DskipTests

# Stage 2: Create the runtime image
FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

# # Copy the packaged JAR file from the build stage
COPY --from=build /app/target/*.jar /app/app.jar

# # Command to run the application
# ENTRYPOINT ["java","-jar","/app/src/main/java/com.example.BackendApplication"]

