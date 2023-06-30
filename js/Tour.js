AFRAME.registerComponent("tour", {
  schema:{
    state: { type: "string", default: "places-list" },
    selectCard: { type: "string", default: "#card1" },
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },
  tick: function () {
    const { state } = this.el.getAttribute("tour");

    if (state === "view") {
      this.hideElement([this.placesContainer])
      this.showElement()
    }
  },
  hideElement: function (ElementList) {
    // console.log(Elementlist)
    ElementList.map(el => {
      el.setAttribute("visible", false);
    });
  },
  showElement:function() {
// add sky tag for 360 deg images
    var sky=document.querySelector("#main-container")
    sky.setAttribute("material",{
      src:`./assets/360_images/${this.data.selectCard}/place-0.jpg`,
      
    })
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var borderEl = this.createborder(position, item.id);

      // Thumbnail Element
      var thumblineEl = this.createthumbline(item);
      borderEl.appendChild(thumblineEl);
      // Title Text Element
      var titleEl = this.createtitle(position, item);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);

      console.log(borderEl);
    }
  },
  createborder: function (position, id) {
    var entity = document.createElement("a-entity");
    entity.setAttribute("id", id);
    entity.setAttribute("position", position);
    entity.setAttribute("visible", true);
    entity.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entity.setAttribute("material", {
      color: "red",
      opacity: 1,
    });
    entity.setAttribute("cursor-listener",{})
    return entity;
  },
  createthumbline: function (item) {
    var entity = document.createElement("a-entity");
    entity.setAttribute("visible", true);
    entity.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entity.setAttribute("material", {
      src: item.url,
    });
    return entity;
  },
  createtitle: function (position, item) {
    var entity = document.createElement("a-entity");
    entity.setAttribute("text", {
      font: "monoid",
      align: "center",
      width: 80,
      color: "black",
      value: item.title,
    });
    var newposition=position
    newposition.y-=32
    entity.setAttribute("position", newposition);
    entity.setAttribute("visible", true);
    return entity;
  },
});
