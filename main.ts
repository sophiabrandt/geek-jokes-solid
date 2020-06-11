import { desc, run, task, sh } from './deps.ts'

desc('Deno Static File server with abc')
task('server', [], function() {
  sh('deno run --allow-env --allow-net="0.0.0.0:8080" --allow-read server.ts')
})

run()
