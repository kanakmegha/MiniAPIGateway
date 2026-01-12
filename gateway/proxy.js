import { createProxyMiddleware } from "http-proxy-middleware";

export const serviceProxy = {
  users: createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
  }),

  orders: createProxyMiddleware({
    target: "http://localhost:4002",
    changeOrigin: true,
  }),

  users: createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
    pathRewrite: {
      "^/users": "/users",
    },
  }),
  
};
