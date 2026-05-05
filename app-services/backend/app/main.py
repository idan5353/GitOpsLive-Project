from fastapi import FastAPI

app = FastAPI(title="aws-gitops-platform-backend", version="0.1.0")

orders = [
    {"id": 1, "item": "laptop", "quantity": 2, "status": "created"},
    {"id": 2, "item": "monitor", "quantity": 1, "status": "processing"},
]

inventory = [
    {"sku": "laptop", "stock": 15},
    {"sku": "monitor", "stock": 8},
    {"sku": "keyboard", "stock": 25},
]

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/")
def root():
    return {"message": "aws-gitops-platform backend is running"}

@app.get("/api/orders")
def get_orders():
    return orders

@app.get("/api/inventory")
def get_inventory():
    return inventory