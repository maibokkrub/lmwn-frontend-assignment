import { Url } from "url"

export interface SearchItemModel{ 
    title: string; 
    eid: number; 
    url: string; 
    description: string; 
    photos: Url[]; 
    tags: string[];
}

