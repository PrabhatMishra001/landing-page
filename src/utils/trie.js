class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  export class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) node.children[char] = new TrieNode();
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) return [];
        node = node.children[char];
      }
      return this._findWords(node, prefix);
    }
  
    _findWords(node, prefix) {
      let results = [];
      if (node.isEndOfWord) results.push(prefix);
      for (let char in node.children) {
        results = results.concat(this._findWords(node.children[char], prefix + char));
      }
      return results;
    }
  }
  