from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import grequests
import json

API_URL = 'http://127.0.0.1:9000/trips'

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def getResource(field:str, keyword:str, operation:str='like'):  
    url = API_URL + f'?{field}_{operation}={keyword}'
    return grequests.get(url)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/api/trips")
async def trips(keyword:str = ''):
    included = set()
    result = []

    reqs = [
        getResource('title', keyword),
        getResource( 'desc', keyword),
        getResource( 'tags', keyword)
    ]

    raw_results = grequests.map(reqs)
    try:
        for res in raw_results: 
            content = json.loads(res.content)
            for item in content: 
                if item['eid'] not in included: 
                    included.add(item['eid']) 
                    result.append(item)
    except Exception as e:
        #TODO: Implement centralized error logger
        return {"error": e}
    return result

@app.get("/api/tags")
async def tags(keyword:str = ''):
    raw_results = grequests.map([getResource( 'tags', keyword)])
    result = json.loads(raw_results[0].content)
    return result