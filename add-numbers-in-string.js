// Given two strings representing integer numbers  ("123" , "30") return a string representing the sum of the two numbers ("153")

function add(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];
    for (var i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
        var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        var next = Math.floor((result[i] + sum) / 10);
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
}

console.log(add('7635','564'));
