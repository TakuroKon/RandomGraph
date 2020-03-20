//******************************************************************
//***** グローバル変数の宣言
var numButton;
var numThread;
var width;   // int型。canvasタグの横幅（px）を格納
var height;  // int型。canvasタグの縦幅（px）を格納
//******************************************************************
//***** オブジェクトの定義 
var Coordinates = function(x, y){
    this.x = x;
    this.y = y;
};
//******************************************************************
//***** windowイベントの定義
//HTML文書読み込み完了後に実行するイベントの定義
window.addEventListener('load', function () {
    Substitution();
    drawStart();
});
//******************************************************************
//***** 変数に値の代入
function Substitution(){
    numButton = 50;
    numThread = 25;
    width    = document.getElementById('canvas_test').clientWidth;
    height   = document.getElementById('canvas_test').clientHeight;
}
//******************************************************************
//***** ボタンの描写Cell
function GetBitmapOfButton(x, y) {
    var bitmap = [];
    
    bitmap[0] = new Coordinates(x, y+1);
    bitmap[1] = new Coordinates(x, y+2);
    bitmap[2] = new Coordinates(x, y+3);
    bitmap[3] = new Coordinates(x, y-1);
    bitmap[4] = new Coordinates(x, y-2);
    bitmap[5] = new Coordinates(x, y-3);
    bitmap[6] = new Coordinates(x+1, y);
    bitmap[7] = new Coordinates(x+1, y+1);
    bitmap[8] = new Coordinates(x+1, y+2);
    bitmap[9] = new Coordinates(x+1, y+3);
    bitmap[10] = new Coordinates(x+1, y-1);
    bitmap[11] = new Coordinates(x+1, y-2);
    bitmap[12] = new Coordinates(x+1, y-3);
    bitmap[13] = new Coordinates(x+2, y);
    bitmap[14] = new Coordinates(x+2, y+1);
    bitmap[15] = new Coordinates(x+2, y+2);
    bitmap[16] = new Coordinates(x+2, y-1);
    bitmap[17] = new Coordinates(x+2, y-2);
    bitmap[18] = new Coordinates(x+3, y);
    bitmap[19] = new Coordinates(x+3, y+1);
    bitmap[20] = new Coordinates(x+3, y-1);
    bitmap[21] = new Coordinates(x-1, y);
    bitmap[22] = new Coordinates(x-1, y+1);
    bitmap[23] = new Coordinates(x-1, y+2);
    bitmap[24] = new Coordinates(x-1, y+3);
    bitmap[25] = new Coordinates(x-1, y-1);
    bitmap[26] = new Coordinates(x-1, y-2);
    bitmap[27] = new Coordinates(x-1, y-3);
    bitmap[28] = new Coordinates(x-2, y);
    bitmap[29] = new Coordinates(x-2, y+1);
    bitmap[30] = new Coordinates(x-2, y+2);
    bitmap[31] = new Coordinates(x-2, y-1);
    bitmap[32] = new Coordinates(x-2, y-2);
    bitmap[33] = new Coordinates(x-3, y);
    bitmap[34] = new Coordinates(x-3, y+1);
    bitmap[35] = new Coordinates(x-3, y-1);
    
    return bitmap; 
}
//******************************************************************
//***** ボタンを描写する座標をランダムに取得
function GetPointForButton(){
    var x = GetRandomInt(3, (width-1-3));
    var y = GetRandomInt(3, (height-1-3));
    return new Coordinates(x, y);
}

function GetBitmapDataOfButton(){
    var ranPntBtn = GetPointForButton();
    var bitmap = GetBitmapOfButton(ranPntBtn.x, ranPntBtn.y);
    
    var bitmapDataButton = [];
    for(var i=0; i<bitmap.length; i++){
        bitmapDataButton[i] = (bitmap[i].x + bitmap[i].y * width) * 4;
    }
    return bitmapDataButton;
}

// nMinからnMaxまでのランダムな整数を返す 
function GetRandomInt (min, max){ 
    return ~~(Math.random()*(max-min+1))+min; 
}
//******************************************************************
//***** 描画開始関数の定義
function drawStart() {
        var canvasElement = document.getElementById('canvas_test');  //canvas要素の取得
	canvasElement.width = canvasElement.clientWidth;             //描画横幅の指定
	canvasElement.height = canvasElement.clientHeight;           //描画縦幅の指定
	var context = canvasElement.getContext('2d');                //コンテキストの取得

	var width = canvasElement.width;   //生成するビットマップ画像の横幅
	var height = canvasElement.height; //生成するビットマップ画像の縦幅
	var bitmapData = []; //ビットマップ画像のRGBAデータ格納配列
	
        //RGBAデータ格納配列の初期化
	for (var j = 0; j < height; j++) {
		for (var i = 0; i < width; i++) {
			var index = (j * width + i) * 4; //各ピクセルの先頭を与えるインデクス番号
			bitmapData[index + 0] = 255; //Rの値
			bitmapData[index + 1] = 255; //Gの値
			bitmapData[index + 2] = 255; //Bの値
			bitmapData[index + 3] = 255; //Aの値
		}
	}

        //RGBAデータ格納配列への値の代入
	for(var i=0; i<numButton; i++){
            var index = GetBitmapDataOfButton();
            
            for(var j=0; j<index.length; j++){
                bitmapData[index[j] + 0] = 0; //Rの値
		bitmapData[index[j] + 1] = 0; //Gの値
		bitmapData[index[j] + 2] = 0; //Bの値
		bitmapData[index[j] + 3] = 255; //Aの値
            }
        }
        
        //イメージデータオブジェクトの生成
	var imageData = context.createImageData(width, height); 
	for (var i = 0; i < width * height * 4; i++) {
		imageData.data[i] = bitmapData[i]; //配列のコピー
	}
	//イメージデータオブジェクトからcanvasに描画する
	context.putImageData(imageData, 0, 0); 
}
//******************************************************************
//***** コンソールチェック
function test1(){
}
function test2() {
}