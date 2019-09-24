function cafeOrder(dineIn, takeOut, serve) {
    let dineInIndex = 0;
    let dineInMaxIndex = dineIn.length -1;
    let takeOutIndex = 0;
    let takeOutMaxIndex = takeOut.length - 1;
    let serveIndex = 0;

    for (let i = 0; i < serve.length; i++) {
        let order = serve[i];
        if (takeOutIndex <= takeOutMaxIndex && takeOut[takeOutIndex] === order) {
          takeOutIndex++;
        } else if (dineInIndex <= dineInMaxIndex && dineIn[dineInIndex] === order) {
            dineInIndex++;
        } else {
            return false;
        }
    }

    if (dineInIndex !== dineIn.length || tkaeOutIndex !== takeOut.length) {
        return false;
    }

    return true;
}