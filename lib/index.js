/**
 * Modules
 */

const prosh = require('prosh')
const {readFileSync} = require('fs')
const {join} = require('path')
const {parse} = require('url')
const logError = require('@f/log-error')

/**
 * Expose
 */

module.exports = initNode

/**
 * init-node
 */

function initNode () {
  const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json')))
  const repo = parse(pkg.repository).pathname.slice(1, -'.git'.length)
  prosh(`
    @git init
  	git add .
  	git commit -am "FIRST"
  	hub create ${repo} -d "${pkg.description}"
  	travis enable
  	git push -u origin master
  `).catch(logError)
}
