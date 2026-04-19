# File and Directory Structure

```text
cliqcampus/
├── .planning/              # GSD project management
│   └── codebase/           # Codebase documentation
├── assets/                 # Global assets (images, logos)
├── backend/                # Node.js Express server
│   ├── node_modules/       # Backend dependencies
│   ├── .env                # Backend configuration
│   ├── package.json        # Backend dependencies/scripts
│   └── server.js           # Server entry point
└── frontend/               # Frontend application
    ├── node_modules/       # Frontend dependencies
    ├── public/             # Static public assets
    ├── src/                # (Optional) Source files
    ├── finance.html/css    # Finance page
    ├── index.html          # Main landing page
    ├── main.js             # Main client logic
    ├── package.json        # Frontend dependencies/scripts
    └── style.css           # Main stylesheet
```

## Key Files
- `frontend/index.html`: Main landing page structure.
- `frontend/main.js`: Contains logic for mobile menu, scholarship form, EMI calculator, and animations.
- `backend/server.js`: Handles API requests for scholarship applications.
