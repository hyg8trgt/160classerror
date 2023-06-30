AFRAME.registerComponent("side-view", {
    init: function() {
        this.createPlaces()
    },
    tick:function() {
        var placeContainer=document.querySelector("#places-container")
        const {state}=placeContainer.getAttribute("tour")
        if(state === "view " ||state==="change-view"){
            this.el.setAttribute("visible",true)

        }
        else {
            this.el.setAttribute("visible",false)
        }
    },
    createPlaces: function() {
        var sideViewer=document.querySelector("#sideview")
        var posx=-150
        var posy=25
        var posz=-40
        for(var i=0; i<=4; i+=1){
            var position={x:posx+=50,y:posy,z:posz}
            var newIcons=this.createCircle(position,i)
            // console.log(newIcons)
            sideViewer.appendChild(newIcons)
            
        }
    },
    createCircle:function(position,id) {
        var entity=document.createElement("a-entity")
        entity.setAttribute("position",position)
        entity.setAttribute("id", `place-${id}`);
        entity.setAttribute("visible", true);
        entity.setAttribute("geometry", {
            primitive: "circle",
            radius: 2.5
          });
          entity.setAttribute("material",{
            color:"red"
          })
          return entity
    }
})
