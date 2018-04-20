// 填充和描边

let drawing = document.getElementById('drawing');

// test001();
// 绘制矩形
// drawFillRect();
// 绘制描边矩形
// drawStrokeRect();

function test001() {
  // 确定浏览器是否支持canvas
  if (drawing.getContext) {
    console.log(111)
    let context = drawing.getContext('2d');
    // 描边
    // context.strokeStyle = 'red';
    // 填充
    // context.fillStyle = '#0000ff';  
  }
}

function drawFillRect() {
  if (drawing.getContext) {
    let context = drawing.getContext('2d')
    // 绘制红色矩形
    context.fillStyle = '#ff0000';
    context.fillRect(10, 10, 50, 50)
    // 绘制半透明的蓝色矩形
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(30, 30, 50, 50)
  }
}

function drawStrokeRect() {
  if (drawing.getContext) {
    let context = drawing.getContext('2d')
    // 绘制红色描边矩形
    context.strokeStyle = '#ff0000';
    context.strokeRect(10, 10, 50, 50);
    // 绘制半透明的蓝色描边矩形
    context.strokeStyle = "rgba(0, 0, 255, 0.5)";
    // context.lineWidth = "10"
    context.strokeRect(30, 30, 50, 50);
  }
}

// drawStrokeRect();

function testClearRect() {
  if (drawing.getContext) {
    var context = drawing.getContext('2d');
    // 绘制红色矩形
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
    context.fillRect(10, 10, 50, 50);
    // 绘制蓝色矩形
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(30, 30, 50, 50);

    // 在两个矩形重叠的地方清除一个小矩形
    context.clearRect(40, 40, 10, 10);
  }
}

// testClearRect();