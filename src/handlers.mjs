import users from './data/users.mjs'

export const getHome = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1> Greetings on the Home page! </h1> ')
}

export const getAbout = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Greetings on the About page!')
}

export const getUsers = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(users))
}
export const postUsers = (req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  if (req.headers['content-type'] === 'application/json') {
    let user = ''

    req.on('data', (chunk) => (user += chunk))
    req.on('end', () => {
      try {
        users.push(JSON.parse(user))
        res.statusCode = 200
        res.end('User data was recived')        
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid JSON format!')
      }
    })
  } else {
    res.statusCode = 400
    res.end('Data must be in the JSON format!')
  }
}

export const handleNotFound = (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1> Page Not Found! </h1>')
}
