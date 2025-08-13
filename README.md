# ProjectLog Frontend

**Demo Link Frontend**: [https://red-pebble-0a7c38403.2.azurestaticapps.net/](https://red-pebble-0a7c38403.2.azurestaticapps.net/)
**Demo Link Backend**: [https://projectlog-api.thankfulsky-655b2f40.westeurope.azurecontainerapps.io/swagger/index.html](https://projectlog-api.thankfulsky-655b2f40.westeurope.azurecontainerapps.io/swagger/index.html)

***Note: any changes made on this website are publicly visible.***

## Overview

**ProjectLog Frontend** is a fast, static, SPA frontend for the ProjectLog full-stack sample application. This project demonstrates modern front-end development practises, including local development and cloud deployments.

ProjectLog allows users to track past projects and add notes to them.

TODO: More info about functionality

---

## Technology Stack
- **Language:** TypeScript
- **Frameworks:** Vite 7 / Vue.js 3 / TailwindCSS 4 / Node.js
- **Libraries:** Vite Router / Axios / Pinia / heroicons
- **Local Deployment:** Vite Proxy / Vite Basic SSL
---

## Prerequisites

- Git
- Node.js

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ikaron/project-log-frontend.git
cd project-log-frontend/ProjectLog
```

### 2. Create Environment Variable Files

These must be created in `ProjectLog/env/`

.env.development.local
> ```env
> VITE_API_PROXY_FROM_URL=https://localhost:8081/api (replace with your local backend URL)
> ```

.env.production.local
> ```env
> VITE_API_BASE_URL=https://your-api-url/
> ```

---

## Usage

### Command Line
Build and start dev environment:
```bash
npm run dev
```

Open in browser: [https://localhost:5173/](https://localhost:5173/)

---

Build for production:
```bash
npm run build
```

Your files will be located in `dist/`

---

## Current Limitations
- Note functionality not yet implemented