

AWS GitOps Platform 🚀

Production-grade multi-environment GitOps platform on AWS EKS with Terraform IaC, Helm packaging, and Argo CD continuous delivery.
<img width="1392" height="709" alt="gitops diagram" src="https://github.com/user-attachments/assets/08f2d180-a82f-475e-960f-b83bd875fe68" />
🎯 What it does
Deploys a full-stack internal orders/inventory platform with:

Backend API + React Frontend services

Multi-environment: dev/staging/prod via Git branches

GitOps: Argo CD syncs from Git repo

Secure CI: GitHub Actions with OIDC to AWS

Observability: CloudWatch + Prometheus + Grafana

🏗️ Architecture
text
GitHub Repos ──► GitHub Actions (CI) ──► ECR
     │                                        │
Terraform IaC ──► EKS Cluster ──► Argo CD ──► Apps (dev/prod)
     │                                        │
    AWS (VPC/RDS/S3)                   Helm Charts
📁 Repository Structure (4 repos)
text
aws-gitops-platform-platform-infra/     # Terraform modules
├── modules/eks/
├── envs/dev/
└── .terraform.lock.hcl

aws-gitops-platform-app-services/       # Source code
├── backend/
├── frontend/
└── .github/workflows/

aws-gitops-platform-helm-charts/        # Helm packaging
├── backend/
└── frontend/

aws-gitops-platform-gitops-live/        # Argo CD manifests
├── apps/dev/
├── charts/
└── bootstrap/app-of-apps.yaml
🚀 Quick Start
Prerequisites
bash
# AWS CLI, Terraform, kubectl, Helm
aws configure
terraform init
Deploy
bash
# Infrastructure
cd platform-infra/envs/dev
terraform init && terraform apply

# GitOps (apps deploy automatically)
kubectl apply -f ../../gitops-live/bootstrap/app-of-apps.yaml
🛠️ Tech Stack
Layer	Tools
Cloud	AWS EKS, ECR, RDS, S3, IAM OIDC
IaC	Terraform
Packaging	Docker, Helm
Orchestration	Kubernetes
GitOps	Argo CD (App-of-Apps)
CI/CD	GitHub Actions
Observability	CloudWatch, Prometheus, Grafana

<img width="1915" height="919" alt="Frontend" src="https://github.com/user-attachments/assets/e19ef4b0-a5a4-407b-beeb-bfc08d65f0c6" />
🔄 Workflow

📄 License
MIT © 2026 Idan Uziel

⭐ Star this repo if it helped your DevOps journey!
