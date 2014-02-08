var stage = new PIXI.Stage(0x66FF99);

var renderer = PIXI.autoDetectRenderer(400, 300);

$(document).ready(function () {
  $(document.body).append(renderer.view);

  requestAnimFrame(animate);
  
  var texture = PIXI.Texture.fromImage("cat.png");
  
  var cat = new PIXI.Sprite(texture);
  
  cat.anchor.x = 0.5;
  cat.anchor.y = 0.5;
  
  cat.position.x = 200;
  cat.position.y = 150;
  
  stage.addChild(cat);
  
  function animate() {
    requestAnimFrame(animate);
  
    cat.rotation += 0.1;
  
    renderer.render(stage);
  };
});
