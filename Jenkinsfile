pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t frontend-image ./'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker run -d --name frontend-app -p 4200:80 frontend-image
                    docker ps
                '''
            }
        }
    }
}
