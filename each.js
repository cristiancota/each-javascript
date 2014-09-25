Array.prototype.each = function (callback) {
	for (var i = 0; i < this.length; i++) {
		callback.call(this[i], i, this[i]);
	};
}

var people = [
{nombre: 'hector', edad: 19},
{nombre: 'ivan', edad: 12},
{nombre: 'dany', edad: 14},
{nombre: 'ariel', edad: 17},
{nombre: 'erick', edad: 20}
];

people.each(function(index, el) {
	console.log(index + 1 + '.-' + ' El ' + el.nombre + ' tiene ' + el.edad + ' años.')
});
