function kClosest(points, k) {
    if (!points.length  || !k) {
        return false;
    }

    let results = [];
    let max = 0;
    points.forEach((values, index) => {
        pos = values[0] * values[0] + values[1] * values[1];
        const item = {
            index,
            value: pos
        };

        if (max > pos) {
            if (!results.length) {
                results.push(item);
            } else {                
                
                for (let j = 0; j < results.length; j++) {
                    if (pos <= results[j].value) {
                        results.splice(j, 0, item);
                        break;
                    }
                }
            }
        } else {
            results.push(item);
            max = pos;
        };
    });
    
    const filterd_results = [];
    for (let i = 0; i < k; i++) {
        filterd_results.push(points[results[i].index]);
    }

    return filterd_results;
}

const inputs1 = [[1, 3], [-2, 2]], k = 1;
console.log(inputs1, kClosest(inputs1, k));

const inputs2 = [[3, 3], [5, -1], [-2, 4]], k2 = 2;
console.log(inputs2, kClosest(inputs2, k2));

const inputs3 = [[3, 3], [5, -1], [-2, 4], [3, 2], [7, 3], [6,1]], k3 = 4;
console.log(inputs3, kClosest(inputs3, k3));


