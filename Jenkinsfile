pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t frontendimg ./'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker run -d --name frontendapp -p 5100:80 frontendimg
                    docker ps
                '''
            }
        }
    }
}
