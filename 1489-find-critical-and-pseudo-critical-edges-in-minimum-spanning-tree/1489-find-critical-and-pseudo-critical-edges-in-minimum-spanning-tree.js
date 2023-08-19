/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
class UnionFind {
  constructor(n) {
    this.rank = new Array(n).fill(1);
    this.f = new Array(n);
    for (let i = 0; i < n; i++) {
      this.f[i] = i;
    }
  }

  Find(x) {
    if (this.f[x] === x) {
      return x;
    } else {
      return this.f[x] = this.Find(this.f[x]);
    }
  }

  Union(x, y) {
    let fx = this.Find(x), fy = this.Find(y);
    if (fx === fy) {
      return;
    }
    if (this.rank[fx] > this.rank[fy]) {
      [fx, fy] = [fy, fx];
    }
    this.f[fx] = fy;
    if (this.rank[fx] === this.rank[fy]) {
      this.rank[fy]++;
    }
  }
}


function findCriticalAndPseudoCriticalEdges(n, edges) {
    for (let i = 0; i < edges.length; i++) {
      edges[i].push(i);
    }
    edges.sort((a, b) => a[2] - b[2]);
    const originMst = GetMST(n, edges, -1);
    const critical = [];
    const nonCritical = [];
    for (let i = 0; i < edges.length; i++) {
      if (originMst < GetMST(n, edges, i)) {
        critical.push(edges[i][3]);
      } else if (originMst === GetMST(n, edges, -1, i)) {
        nonCritical.push(edges[i][3]);
      }
    }
    return [critical, nonCritical];
}

function GetMST(n, edges, blockedge, preEdge = -1) {
    const uf = new UnionFind(n);
    let weight = 0;
    if (preEdge !== -1) {
      weight += edges[preEdge][2];
      uf.Union(edges[preEdge][0], edges[preEdge][1]);
    }
    for (let i = 0; i < edges.length; i++) {
      if (i === blockedge) {
        continue;
      }
      const edge = edges[i];
      if (uf.Find(edge[0]) === uf.Find(edge[1])) {
        continue;
      }
      uf.Union(edge[0], edge[1]);
      weight += edge[2];
    }
    for (let i = 0; i < n; i++) {
      if (uf.Find(i) !== uf.Find(0)) {
        return 1e9 + 7;
      }
    }
    return weight;
}



