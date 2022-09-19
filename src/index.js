import Post from './Post'
import json from './assets/json.json'
import './styles/styles.css'
import ye from './assets/ye.jpg' 

console.log('JSONss:', json)
const post = new Post('webpack title', ye)
console.log(`Post to string: ${post.toString()}`)