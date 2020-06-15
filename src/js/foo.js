import { bar } from './bar.js'

;(async function main () {

  let { baz } = await import('./baz.js')

  console.log('hi from foo.js')
  console.log(bar)
  console.log(baz)

})();
