function stringChop(str, size) {
    let arr = [];
    let j = size;
    let i = 0;
    let s = "";
    
    if (str == null || str == undefined) {
        return arr;
    } else {
        while (i < str.length) {
            while (j > 0) {
                if (i == str.length) {
                    break;
                }
                s += str[i];
                i++;
                j--;
            }
            arr.push(s);
            j = size;
            s = "";
        }
    }
    return arr; // Move return outside of the loop
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
