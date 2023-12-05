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
WORKDIR /app

# Copy the packaged JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Set the entry point
ENTRYPOINT ["java", "-jar", "app.jar"]