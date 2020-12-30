import $ from 'jquery';
// import {} from 'googlemaps';
$(() => {
    // let map: google.maps.Map;
    // const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

    // function initMap(): void {
    //     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //         center,
    //         zoom: 8
    //     });
    //     initMap();
    // }
    // function initMap() {
    //                 // The location
    //                 // const location = { lat: 10.807230, lng: 106.683330 };
    //                 // The map, centered at Uluru
    //     var mapOptions = {
    //         center: new google.maps.LatLng(10.807230,106.683330), //đối tượng vị trí, map sẽ hiển thị vị trí này
    //         zoom: 17,  //độ phóng
    //         mapTypeId: google.maps.MapTypeId.ROADMAP,  //loại bản đồ chuẩn mặc định
    //         // scaleControl: false, // loại các button hiện trên map
    //         // streetViewControl: false, // loại các button hiện trên map
    //         // fullscreenControl: false, // loại các button hiện trên map
    //         disableDefaultUI: true,// loại các button hiện trên map
    //       };
    //     const map = new google.maps.Map(document.getElementById("map") as HTMLElement,mapOptions);
    //                     // The marker, positioned at lacation
    //                     // const marker = new google.maps.Marker({
    //                     //     position: location,
    //                     //     map: map,
    //                     // });
    //     const marker2 = new google.maps.Marker({
    //         position: { lat: 10.805870, lng: 106.685460 },
    //         map: map,
    //         title:'250 nguyen thuong hien',
    //         icon:'icons/icon_add_photo.svg'
    //     });


    //     const marker = new google.maps.Marker({
    //         position: map.getCenter(),  //vị trí nút
    //         map: map,   //áp dụng cho đối tượng bản đồ trên.
    //         title: 'Khu vực thanh xuân' //alt khi mouseover vào nút, cách khác: marker.setTitle('abc')
    //       });
    //     //   map.addOverlay(marker2);
    // }
    // initMap();

    // Array Maker
    let map: google.maps.Map;
    function initMap() {
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: new google.maps.LatLng(-33.91722, 151.23064),
            zoom: 16,
            disableDefaultUI: true,
            scaleControl: false, // loại các button hiện trên map
            streetViewControl: false, // loại các button hiện trên map
            fullscreenControl: false,
        });

        const iconBase =
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

        const icons: Record<string, { icon: string }> = {
            parking: {
                icon: iconBase + "parking_lot_maps.png",
            },
            library: {
                icon: iconBase + "library_maps.png",
            },
            info: {
                icon: iconBase + "info-i_maps.png",
            },
        };

        const features = [
            {
                position: new google.maps.LatLng(-33.91721, 151.2263),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91539, 151.2282),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91747, 151.22912),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.9191, 151.22907),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91725, 151.23011),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91872, 151.23089),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91784, 151.23094),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91682, 151.23149),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.9179, 151.23463),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91666, 151.23468),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.916988, 151.23364),
                type: "info",
            },
            {
                position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
                type: "parking",
            },
            {
                position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
                type: "library",
            },
        ];

        // Create markers.
        for (let i = 0; i < features.length; i++) {
            const marker = new google.maps.Marker({
                position: features[i].position,
                icon: icons[features[i].type].icon,
                map: map,
            });
        }
    }

    // POPUP
    //   let map: google.maps.Map, popup, Popup;

    //   /** Initializes the map and the custom popup. */
    //   function initMap(): void {
    //     map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //       center: { lat: -33.9, lng: 151.1 },
    //       zoom: 10,
    //     });

    //     /**
    //      * A customized popup on the map.
    //      */
    //     class Popup extends google.maps.OverlayView {
    //       position: google.maps.LatLng;
    //       containerDiv: HTMLDivElement;

    //       constructor(position: google.maps.LatLng, content: HTMLElement) {
    //         super();
    //         this.position = position;

    //         content.classList.add("popup-bubble");

    //         // This zero-height div is positioned at the bottom of the bubble.
    //         const bubbleAnchor = document.createElement("div");
    //         bubbleAnchor.classList.add("popup-bubble-anchor");
    //         bubbleAnchor.appendChild(content);

    //         // This zero-height div is positioned at the bottom of the tip.
    //         this.containerDiv = document.createElement("div");
    //         this.containerDiv.classList.add("popup-container");
    //         this.containerDiv.appendChild(bubbleAnchor);

    //         // Optionally stop clicks, etc., from bubbling up to the map.
    //         Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    //       }

    //       /** Called when the popup is added to the map. */
    //       onAdd() {
    //         this.getPanes().floatPane.appendChild(this.containerDiv);
    //       }

    //       /** Called when the popup is removed from the map. */
    //       onRemove() {
    //         if (this.containerDiv.parentElement) {
    //           this.containerDiv.parentElement.removeChild(this.containerDiv);
    //         }
    //       }

    //       /** Called each frame when the popup needs to draw itself. */
    //       draw() {
    //         const divPosition = this.getProjection().fromLatLngToDivPixel(
    //           this.position
    //         );

    //         // Hide the popup when it is far out of view.
    //         const display =
    //           Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
    //             ? "block"
    //             : "none";

    //         if (display === "block") {
    //           this.containerDiv.style.left = divPosition.x + "px";
    //           this.containerDiv.style.top = divPosition.y + "px";
    //         }

    //         if (this.containerDiv.style.display !== display) {
    //           this.containerDiv.style.display = display;
    //         }
    //       }
    //     }

    //     popup = new Popup(
    //       new google.maps.LatLng(-33.866, 151.196),
    //       document.getElementById("content") as HTMLElement
    //     );
    //     popup.setMap(map);
    //   }


    let googleMapsUrl = "//maps.google.com/maps/api/js?libraries=places&key=AIzaSyAuqtG8XhmKQPGoYpFi9dqZmhZTDWGCxE0"

    function addMapsScript() {
        if (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length) {
            document.body.appendChild(Object.assign(
                document.createElement('script'), {
                type: 'text/javascript',
                src: googleMapsUrl,
                onload: () => initMap()
            }));
        } else {
            initMap();
        }
    }
    addMapsScript();
})
