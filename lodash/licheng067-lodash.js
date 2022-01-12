var licheng067 = {
  chunk: (ary, index) => {
    let newAry1 = []
    let newAry2 = []
    for (let i = 0; i < index; i++) {
      newAry1.push(ary[i])
    }
    for (let i = index; i < ary.length; i++) {
      newAry2.push(ary[i])
    }
    return [newAry1, newAry2]
  },
}
