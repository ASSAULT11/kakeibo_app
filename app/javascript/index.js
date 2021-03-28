var demo01 = document.getElementById("demo01")
if ( demo01 != null ) {
var value = 300;
var maxNum = 100;
var tagInput = document.getElementById('jsNum');
var tagOutput = document.getElementById('jsPrice');
tagInput.addEventListener('change', function() {
	var str = this.value;
	var num = Number(str.replace(/[^0-9]/g, ''));
	if(num == 0) {
		num = '';
	} else if (num > maxNum) {
		num = maxNum;
	}
	this.value = num;
	if(num != 0) {
		var price = num * value;
		tagOutput.value = price;
	}
});
}
