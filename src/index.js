
exports.min = function min (array) {
	let mi = Number.MAX_SAFE_INTEGER;
	if (arguments.length === 0 || array.length === 0) {
		return 0;
	}
	for (var i = 0; i < array.length; i++) {
		if (array[i] < mi) {
			mi = array[i];
		}
	}
  return mi;
}

exports.max = function max (array) {
	let ma = 0;
	if (arguments.length === 0 || array.length === 0) {
		return 0;
	}
	for (var i = 0; i < array.length; i++) {
		if (array[i] > ma) {
			ma = array[i];
		}
	}
  return ma;
}

exports.avg = function avg (array) {
	let av = 0;
	if (arguments.length === 0 || array.length === 0) {
		return 0;
	}
	for (var i = 0; i < array.length; i++) {
		av += array[i];
	}
	av /= array.length;
  return av;
}
