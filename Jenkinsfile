#!/usr/bin/env groovy

pipeline {

    agent any
   
    options { disableConcurrentBuilds() }
   
   
    stages {
    
    	 stage('Permissions') {
            steps {
                sh 'chmod 775 *'
            }
        }
        
		
		stage('Update Docker UAT image') {
            when { branch "master" }
            steps {
                sh '''
					docker login -u "mkefi" -p "09152798Km"
                    docker build --no-cache -t tjv:latest .
                    docker tag tjv:latest mkefi/tjv:latest
                    docker push mkefi/tjv:latest
					docker rmi tjv:latest
                '''
       			 }
        	}
        	
        stage('Update UAT container') {
            when { branch "master" }
            steps {
                sh '''
				docker login -u "mkefi" -p "09152798Km"
                    docker pull mkefi/tjv:latest 
                    docker stop tjv 
                    docker rm tjv                   
                    docker run -p 8085:80 --name tjv -t -d mkefi/tjv:latest
                    docker rmi -f $(docker images -q --filter dangling=true)
                '''
            }
        }
		
	}
  }
