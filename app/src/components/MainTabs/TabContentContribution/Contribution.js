import React from 'react'

export default class Contribution {
  constructor(updatedAt, owner, repository, branch, recentCommit) {
    this.updatedAt = updatedAt         /** string */
    this.owner = owner,                /** string */
    this.repository = repository       /** string */
    this.branch = branch               /** string */
    this.recentCommit = recentCommit   /** string */
  }
}
