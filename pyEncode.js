const pyEncode = py => {
    let first = [null, 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's'];
    let last = [undefined, 'a', 'o', 'e', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'ong', 'i', 'ia', 'ie', 'iao', 'iou', 'ian', 'ian', 'ian', 'in', 'iang', 'ing', 'iong', 'u', 'ua', 'uo', 'uai', 'uei', 'uan', 'uen', 'uang', 'ueng', 'v', 've', 'van', 'vn'];
    let pre, post;
    if (py.length >= 2) {
        if (first.indexOf(py.slice(0, 1)) >= 0) {
            pre = first.indexOf(py.slice(0, 1));
            post = last.indexOf([py.slice(2)]);
        }else if(first.indexOf(py[0])>=0) {
            pre = first.indexOf([py[0]]);
            post = last.indexOf(py.slice(1));
        }else{
            pre = 0;
            post = last.indexOf(py);
        }
    } else {
        pre = py;
        post = undefined;
    }
    // JavaScript' number do not have different length, here use a short string to express the pyEncode
    return pre + '.' + post;
};