import Post from './Post'
import json from './assets/json'
import './styles/styles.css'
import './styles/scss.scss'
import ye from './assets/ye'

console.log('JSONss:', json)
const post = new Post('webpack title', ye)
console.log(`Post to string: ${post.toString()}`)