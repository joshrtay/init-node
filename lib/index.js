/**
 * Modules
 */

const prosh = require('prosh')

/**
 * Expose
 */

module.exports = initNode

/**
 * init-node
 */

function initNode () {
  const pkg = getPackage()
  prosh(`
    @git init
  	@git add .
  	@git commit -am "FIRST"
  	@hub create ${pkg.repository} -d "${pkg.description}"
  	@travis enable
  	@git push -u origin master
  `)
}
