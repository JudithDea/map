import { LeafletProvider, MapLayer, withLeaflet } from "react-leaflet";
import { Marker as LeafletMarker } from "leaflet";
import React from "react";
import "./DefaultMarker.css";

class DefaultMarker extends MapLayer {
  // All code in this component is Leaflet specific, see https://leafletjs.com/reference-1.3.4.html

  // upon click on a sidebar list item (currentMarkerClickHandler()), this calls Leaflet's openPopup method on the element
  componentDidMount() {
    super.componentDidMount();
    if (this.props.active) {
      this.leafletElement.openPopup();
    }
  }

  // once another item is selected, the active item needs to unmount to remove first popup from the DOM
  componentWillUnmount() {
    this.leafletElement.off("click");
    super.componentWillUnmount();
  }

  // This checks if the state has changed and if the active location needs to close or open a popup
  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    if (prevProps.active && !this.props.active) {
      this.leafletElement.closePopup();
    }
    if (!prevProps.active && this.props.active) {
      this.leafletElement.openPopup();
    }
  }

  // creating new leaflet item that can take Leaflet's methods.
  createLeafletElement(props) {
    const el = new LeafletMarker(props.position, this.getOptions(props));
    this.contextValue = { ...props.leaflet, popupContainer: el };
    return el;
  }

  // this part creates the marker foundation
  updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }
    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }
    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }
    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }
    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  }

  render() {
    const { children } = this.props;
    return children == null || this.contextValue == null ? null : (
      <LeafletProvider value={this.contextValue}>{children}</LeafletProvider>
    );
  }
}

// no  markers are active by default. Click on item in sidebar sets state for the active item.
DefaultMarker.defaultProps = {
  active: false
};

export default withLeaflet(DefaultMarker);
