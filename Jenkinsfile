pipeline {
    agent {label 'dev'};

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        DOCKER_IMAGE = "iemafzal/tws-community-app"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/iemafzalhassan/simple-express-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'cd client && npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Test not available"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker compose build"
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh '''
                        docker compose down || true
                        docker compose up -d
                        docker compose ps
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh '''
                        sleep 10
                        curl -f http://localhost:3000/api/welcome || exit 1
                    '''
                }
            }
        }
    }

    post {
        always {
            sh '''
                docker logout
            '''
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded! Application deployed with Docker Compose'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
