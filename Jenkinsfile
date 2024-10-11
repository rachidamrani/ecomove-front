pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ecomovefront-image ./'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker run -d --name ecomovefront-app -p 4200:80 ecomovefront-image
                    docker ps
                '''
            }
        }
    }
}
