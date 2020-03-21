const chainMaker = {
  getLength() {
    return (this.chain || []).length
  },
  addLink(val) {
    this.chain =
      [...(this.chain || []), `(${val !== undefined ? ` ${val} ` : ' '})`]
    return this
  },
  removeLink(pos) {
    if (!(pos > 0 && pos <= this.getLength() && !(pos%1))) {
      delete this.chain
      throw new Error('incorrect postion')
    }
    this.chain.splice(pos - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = (this.chain || []).reverse()
    return this
  },
  finishChain() {
    const chain = this.chain.join('~~')
    delete this.chain
    return chain
  }
};

module.exports = chainMaker;