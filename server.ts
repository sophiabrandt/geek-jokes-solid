import { Application } from './deps.ts'

const app = new Application()

app.static('/', 'build').file('/', 'build/index.html').start({ port: 8080 })
