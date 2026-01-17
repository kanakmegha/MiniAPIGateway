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

