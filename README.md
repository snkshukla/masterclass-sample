# Masterclass Sample Application: Docker, Kubernetes, and Microservices

[![GitHub stars](https://img.shields.io/github/stars/snkshukla/masterclass-sample.svg?style=social)](https://github.com/snkshukla/masterclass-sample/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/snkshukla/masterclass-sample.svg?style=social)](https://github.com/snkshukla/masterclass-sample/network/members)
[![License](https://img.shields.io/github/license/snkshukla/masterclass-sample)](LICENSE)  

Welcome to the **Masterclass Sample Repository** - This repository contains the sample application and configuration files used in the Docker, Kubernetes, and Microservices masterclass at **Scaler**.  It's designed to be a practical, hands-on resource that you can use to follow along with the class and explore the concepts in more detail.  It provides a real-world example of how to containerize, deploy, and orchestrate a simple Node.js application with a database.

## Table of Contents

1. [Overview](#Overview)
2. [Repository Structure](#repository-structure)
3. [Getting Started](#getting-started)
    - [Prerequisites](#Prerequisites)
    - [Running Locally with Docker Compose]()
    - [Deploying on Kubernetes]()
4. [Learn More]()
5. [Blog Series (Deep Dive)](#blog-series-deep-dive)
6. [Contributing]()
7. [License]()

---

## Overview

This simple Node.js application (with an accompanying database) demonstrates key DevOps concepts like:

- **SDLC (Software Development Life Cycle)**: Planning → Development → Testing → Deployment → Maintenance
- **Docker**: Packaging applications with Dockerfiles and understanding container fundamentals
- **Docker Compose**: Setting up multi-container environments for local development
- **Kubernetes**: Deploying applications at scale with basic manifests, advanced deployments, and Helm charts

We’ll use this project to explore everything from setting up local development to creating production-ready Kubernetes clusters.

---

## Repository Structure

Here’s a breakdown of the major files and folders:

```
masterclass-sample/
├── .dockerignore            # Specifies files and directories that Docker should ignore
├── .github
│   └── workflows           # GitHub Actions configurations (CI/CD pipelines, etc.)
├── .gitignore              # Git ignore rules
├── Dockerfile              # Defines how to build the application’s Docker image
├── LICENSE                 # Open-source license for this repository
├── README.md               # The file you’re reading now
├── app.js                  # Main Node.js application entry point
├── compose.yaml            # Docker Compose configuration file
├── eslint.config.js        # ESLint configuration for consistent coding standards
├── k8s
│   ├── basic               # Basic Kubernetes manifests (e.g., Pod, Service)
│   ├── deployments         # Additional/advanced deployment manifests
│   └── helm-chart          # Helm chart(s) for packaging and deploying on Kubernetes
├── package-lock.json       # NPM lock file (ensures consistent dependency versions)
├── package.json            # NPM metadata (project dependencies, scripts, etc.)
├── public
│   └── styles.css          # Static CSS for styling the application UI
└── views
    └── index.ejs           # Template file for server-side rendering

```

### Highlights

- **`Dockerfile`**: Defines the base image and steps required to run the Node.js application.
- **`compose.yaml`**: Illustrates a multi-container setup, including a database, for local development.
- **`k8s/`**: Contains everything Kubernetes-related, including:
    - **basic**: Simple resource manifests (Pods, Services).
    - **deployments**: More advanced deployments or stateful sets.
    - **helm-chart**: Helm-based packaging for easier versioning and reusable deployment configurations.
- **`app.js`**: Node.js application logic to demonstrate a minimal web service.

---

## Getting Started

### Prerequisites

You’ll need the following installed on your machine:

- Node.js (optional if you just want to run via Docker)
- Docker
- Docker Compose
- Kubernetes CLI (kubectl)
- Helm (optional) for using Helm charts

### Running Locally with Docker Compose

1. **Clone this repository**:

    ```bash
    git clone https://github.com/snkshukla/masterclass-sample.git
    cd masterclass-sample
    ```

2. **Build and run the containers**:

    ```bash
    docker-compose -f compose.yaml up --build
    ```

3. **Access your application**:

    Open your browser and go to:

    ```
    http://localhost:3000
    ```

    You should see the Node.js application up and running, connected to its database (if configured in the Compose file).


### Deploying on Kubernetes

> Note: Make sure you have a running Kubernetes cluster (either a local tool like minikube, Kind or a cloud provider).
>
1. **Apply the basic Kubernetes manifests** (in the `k8s/basic` folder):

    ```bash
    kubectl apply -f k8s/basic/
    ```

2. **Check the status**:

    ```bash
    kubectl get pods
    kubectl get services
    ```

3. **(Optional) Port Forward** to access the service locally:

    ```bash
    kubectl port-forward svc/web 3000:3000
    ```

4. **Open your browser** to http://localhost:3000 to see the running application.
5. **Explore advanced Kubernetes** deployments in the `k8s/deployments` folder, or try **Helm charts** in `k8s/helm-chart` to package and deploy your application more efficiently.

---

## Learn More

To supplement what we’ve done here, I’ve created a **series of blog posts** that walk you through each concept at a deeper level—from explaining Docker’s layered architecture to Kubernetes best practices in production. Check it out here:

[Our Tech Blogs - Up And Running With Docker & Kubernetes](https://www.getdevops.services/docker/)

These blogs serve as a companion guide, providing extended explanations, troubleshooting tips, and real-world usage patterns.

---

## Blog Series (Deep Dive)

For a comprehensive, step-by-step explanation of all the concepts covered in this repository, and the masterclass, visit our blog:

[**The DevOps Blog**](https://tech.hindizubaan.com/learn)

The blog series will cover:

1.  **[Docker 101: Why Containers Matter - Live](https://tech.hindizubaan.com/learn/docker-101-why-containers-matter)**
2.  **[Introduction to DevOps: Culture, Practices, and Tools](https://tech.hindizubaan.com/learn/introduction-to-devops)**
2.  **Building Your First Docker Image (Dockerfile Deep Dive)** - Yet to be published
3.  **Local Development with Docker Compose** - Yet to be published
4.  **[Introduction to Kubernetes: Concepts and Architecture](https://tech.hindizubaan.com/learn/getting-started-with-kubernetes)**
5.  **Advanced Kubernetes: Ingress, ConfigMaps, Secrets, and Scaling**
7.  **Microservices Architecture and Best Practices**
8.  ...More to follow

Not all these blogs are yet live, but stay tuned as we will target to release atleast one blog every Wednesday.

## Contributing

Contributions are welcome! Feel free to:

- Open issues for suggestions and bug reports
- Submit pull requests to improve documentation or add features

Your feedback helps make this repository a better learning resource.

---

## License

This project is licensed under the MIT License.

Feel free to use and modify this code as you see fit, and don’t forget to share your learnings with the community!

---

Happy containerizing, and see you in the next masterclass!
