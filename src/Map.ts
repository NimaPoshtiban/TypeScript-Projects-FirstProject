export interface MarkerInfo {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(markerStats: MarkerInfo): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerStats.location.lat,
        lng: markerStats.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerStats.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
