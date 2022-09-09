var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","e4af4e59-72b7-4bb1-9002-954570292f6d","2250faaa-e1cf-4daf-bc4a-d76a3243d453","4c41cf66-6d50-47ca-ba59-51b73098ccbd","90d9bf15-42a5-4d39-9ba8-4fceb1d54fb5","ddb551c0-ca41-4189-82b9-e0b049fe4bad","18d1c394-b56e-4559-bc6f-bf137113daaf","8a49ec7f-9709-48f7-ae85-c48367eafa79","2f5e0b32-f40d-47e0-9cb4-189fd36e8296"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"MphhVCqjgStZwK2ndrkjxNi1CkcsuO.h","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"y2Oi19EoRR053XGOR9LyR1hXyT1oQpA_","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"wR5T12DKNlbP_B81c.EJ8mh3QciymRix","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"e4af4e59-72b7-4bb1-9002-954570292f6d":{"name":"images (9).png_1","sourceUrl":null,"frameSize":{"x":301,"y":167},"frameCount":1,"looping":true,"frameDelay":12,"version":"FBb2GauoPBB7vbJiAPgVUvIXQc9GnxLm","loadedFromSource":true,"saved":true,"sourceSize":{"x":301,"y":167},"rootRelativePath":"assets/e4af4e59-72b7-4bb1-9002-954570292f6d.png"},"2250faaa-e1cf-4daf-bc4a-d76a3243d453":{"name":"escudo","sourceUrl":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/2250faaa-e1cf-4daf-bc4a-d76a3243d453.png","frameSize":{"x":259,"y":194},"frameCount":1,"looping":true,"frameDelay":4,"version":"Aaiixfy.9xFtJ4fdUowiSWGYhjRezFeu","loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":194},"rootRelativePath":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/2250faaa-e1cf-4daf-bc4a-d76a3243d453.png"},"4c41cf66-6d50-47ca-ba59-51b73098ccbd":{"name":"download (1).png_1","sourceUrl":null,"frameSize":{"x":302,"y":167},"frameCount":1,"looping":true,"frameDelay":12,"version":"2bHFTV8X.vVKNq.a3ZTaIfEFIUmE53yt","loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":167},"rootRelativePath":"assets/4c41cf66-6d50-47ca-ba59-51b73098ccbd.png"},"90d9bf15-42a5-4d39-9ba8-4fceb1d54fb5":{"name":"martelo","sourceUrl":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/90d9bf15-42a5-4d39-9ba8-4fceb1d54fb5.png","frameSize":{"x":227,"y":222},"frameCount":1,"looping":true,"frameDelay":4,"version":"RpJsEYNxd4X_OXBApdC1_ck1gZFKO8a0","loadedFromSource":true,"saved":true,"sourceSize":{"x":227,"y":222},"rootRelativePath":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/90d9bf15-42a5-4d39-9ba8-4fceb1d54fb5.png"},"ddb551c0-ca41-4189-82b9-e0b049fe4bad":{"name":"caneta","sourceUrl":null,"frameSize":{"x":259,"y":194},"frameCount":1,"looping":true,"frameDelay":12,"version":"CkMpxIekBOgdYqXCnJHHo_LIl.HigQxe","loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":194},"rootRelativePath":"assets/ddb551c0-ca41-4189-82b9-e0b049fe4bad.png"},"18d1c394-b56e-4559-bc6f-bf137113daaf":{"name":"jóia","sourceUrl":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/18d1c394-b56e-4559-bc6f-bf137113daaf.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"8hcqTkKm_IOWxQ9eniwkSOEgfVdJ1Y4G","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/18d1c394-b56e-4559-bc6f-bf137113daaf.png"},"8a49ec7f-9709-48f7-ae85-c48367eafa79":{"name":"thanos","sourceUrl":null,"frameSize":{"x":161,"y":313},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nz6rfV84ysf9gXQW7VAGJ57rRDiSoBey","loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":313},"rootRelativePath":"assets/8a49ec7f-9709-48f7-ae85-c48367eafa79.png"},"2f5e0b32-f40d-47e0-9cb4-189fd36e8296":{"name":"branco","sourceUrl":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/2f5e0b32-f40d-47e0-9cb4-189fd36e8296.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"OaJYnV.odUH_z9kQgLm3y33m1OjxuL2I","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/7UKcruK8Pi133S0uWLnD8JbddHoigzxkIyriqv7hc8Y/2f5e0b32-f40d-47e0-9cb4-189fd36e8296.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


 
var a = createSprite(200,345,200,345)
a.shapeColor="red"

var b = createSprite(200,250,10,10)
b.shapeColor="red"

var c = createSprite(200,150,10,10)
c.shapeColor="red"

var d = createSprite(200,50,10,10)
d.shapeColor="red"

var e = createSprite(200,5,200,20)
e.shapeColor="red"

var goal =0;
var death = 0

a.setAnimation("thanos");
a.scale=.2;
b.setAnimation("martelo");
b.scale=.4;
c.setAnimation("caneta");
c.scale=0.3;
d.setAnimation("escudo");
d.scale=.3;
e.setAnimation("jóia")
e.scale=0.1



b.setVelocity(-10,0);
c.setVelocity(10,0);
d.setVelocity(-10,0);


function draw() {
  background("white")
  
//plano de fundo(b);

createEdgeSprites()

a.bounceOff(edges)
b.bounceOff(edges)
c.bounceOff(edges)
d.bounceOff(edges)

if(keyDown(UP_ARROW)){
  a.y=a.y-6
}

if(keyDown(DOWN_ARROW)){
  a.y=a.y+6
}

if(keyDown(LEFT_ARROW)){
  a.x=a.x-6
}

if(keyDown(RIGHT_ARROW)){
  a.x=a.x+6
}

if(a.isTouching(b)|| a.isTouching(c)|| a.isTouching(d)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  a.x=200
  a.y=350
  death = death+1
}
if(a.isTouching(e)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  a.x=200
  a.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,290,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
