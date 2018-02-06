function script()
{
    var M;
    var R;

    var camera;
    var mesh;
    var mesh2;

    var mouse;

    this.preLoad = function(){

    };

    this.setup = function(){

        M = this.getContext();


        R = new Mobilizing.Renderer3D();
        M.addComponent(R);

        camera =  new Mobilizing.Camera();
        //camera.transform.setLocalPosition(0,0,20);
        camera.setToPixel();
        R.addCamera(camera);

        var light = new Mobilizing.Light();
        light.transform.setLocalPosition(0,10,10);
        light.setIntensity(2);
        R.addToCurrentScene(light);



        mouse = new Mobilizing.input.Mouse({target: R.canvas});
        mouse.setup();
        mouse.on();
        M.addComponent(mouse);

        console.log(mouse);

    };

    this.update = function(){


    };
};
