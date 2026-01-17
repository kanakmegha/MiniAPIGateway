# 🚪 Mini API Gateway

A lightweight, production-inspired **API Gateway** built to understand how real-world backend infrastructure works.  
This project implements a single entry-point API that routes requests to multiple internal services while handling authentication, logging, retries, and timeouts.

This is a simplified version of what tools like Kong, NGINX, or Envoy do in production.

---

## 🚀 What this project does

- Exposes a single public API endpoint
- Routes requests to multiple internal services
- Applies gateway-level authentication
- Logs requests with latency
- Handles retries and timeouts
- Normalizes errors from downstream services

---

## 🧠 Why this project?

Most developers interact with APIs but never build the infrastructure that sits in front of them.

This project was built to understand:
- Reverse proxy behavior
- Middleware execution order
- Request lifecycle in backend systems
- Failure handling and resilience patterns

---

## 🏗 Architecture

Client  
&nbsp;&nbsp;│  
&nbsp;&nbsp;▼  
API Gateway (Port 3000)  
&nbsp;&nbsp;├── Authentication Middleware  
&nbsp;&nbsp;├── Logging Middleware  
&nbsp;&nbsp;├── Timeout Handling  
&nbsp;&nbsp;├── Retry Logic  
&nbsp;&nbsp;└── Reverse Proxy Router  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── User Service (Port 4001)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Order Service (Port 4002)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Payment Service (Port 4003)  

### Request Flow

1. Client sends a request to the API Gateway  
2. Gateway validates authentication credentials  
3. Request is logged with method, path, and latency  
4. Timeout and retry policies are applied  
5. Request is forwarded to the appropriate internal service  
6. Response is returned to the client through the gateway  

