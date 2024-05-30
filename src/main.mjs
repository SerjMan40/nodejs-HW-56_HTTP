import http from 'http'
import { getAbout, getHome, getUsers, postUsers, handleNotFound } from './handlers.mjs'

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
   return getHome(req, res)
  }
  if (req.method === 'GET' && req.url === '/about') {
    return getAbout(req, res)
  } 
  if (req.method === 'GET' && req.url === '/users') {
    return getUsers(req, res)
  }
  if (req.method === 'POST' && req.url === '/users') {
    return postUsers(req, res)
  }
  return handleNotFound(req, res)
})

server.listen(PORT, () => console.log(`Server was launched on port ${PORT}`))
 