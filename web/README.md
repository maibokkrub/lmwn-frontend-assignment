#LMWN Frontend assignment 

This project is an answer for the frontend position at LMWN. 
This folder contains a react interface for the web application. 

## Before Running

Make sure you've spinned up the `json-server` and `api-gateway` accordingly. 

For JSON server,
```bash
cd json-server
yarn start
```

For API gateway,
```bash
cd api-gateway
uvicorn main:app --reload                                     
```

Finally for the react UI,
```bash
cd api-gateway
uvicorn main:app --reload                                     
```

---

## Improvements made apart from the requirements 
- Responsive components for smaller and larger screen
- The `อ่านต่อ` was moved to aligned at the left, new line. To provide a consistent and cleaner UX.
- Some space adjustments in the components.