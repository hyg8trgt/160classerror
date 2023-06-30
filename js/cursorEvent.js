AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectItem: { type: "string", default: "" },
  },
  init: function () {
    // this.handlePlaceList()
    this.handleMouseEnter();
    this.handleMouseLeave();
    this.handleClickEvents();
  },
  handlePlaceList: function () {
    var id = this.el.getAttribute("id");
    var placeId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];
    // console.log("id", id);
    // console.log("placeId", placeId);
    if (placeId.includes(id)) {
      var placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectItem: id,
      });
      this.el.setAttribute("material", {
        color: "blue",
        opacity: 1,
      });
    }
  },
  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlaceList();
    });
  },
  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      if (this.data.selectItem) {
        const el = document.querySelector(`#${this.data.selectItem}`);
        const id = el.getAttribute("id");
        console.log(el)
        console.log(id)
        if (id == this.data.selectItem) {
          el.setAttribute("material",
            {
              color: "red",
              opacity: 1,
            })
            
        }
      }
    });
  },
  handleClickEvents: function () {
    this.el.addEventListener("click", (evt) => {
      var places_container = document.querySelector("#places-container");
      var { state } = places_container.getAttribute("tour");
      if (state === "places-list") {
        var id = this.el.getAttribute("id");
        var placeId = [
          "taj-mahal",
          "budapest",
          "eiffel-tower",
          "new-york-city",
        ];

        if (placeId.includes(id)) {
          places_container.setAttribute("tour", {
            state: "view",
            selectCard: id,
          });
        }
        if(state==="view"){
          this.handleViewState()

        }
        if(state==="change-view"){
          this.handleViewState()
        }
      }
    });
  },
  handleViewState:function(){
    const el=this.el
    const id=el.getAttribute("id")
    const placeContainer=document.querySelector("#places-container")
    const selectItemId=placeContainer.getAttribute("#cursor-event")
    const sId=selectItemId.selectItem
    const sideViewId=['place-1','place-2','place-3','place-4']
    console.log(sId)
    if(sideViewId.includes(id)){
      placeContainer.setAttribute("tour",{
        state:"change-view"
      })
      const sky=document.querySelector("#main-container")
      sky.setAttribute("material",{
        src:`./assets/360_images/${sId}/${id}/place-0.jpg`
      })
    }
  }
});



