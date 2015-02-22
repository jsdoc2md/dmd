<a name="module_MapView"></a>
## MapView
MapView encapsulates a Google maps view so it can be used with famo.us.

Additionally it adds methods to set the position and zoom-factor of the map using transitions.
Use [MapModifier](MapModifier) and [MapStateModifier](MapStateModifier) to place famo.us renderables on the map, much like google-maps markers.

**Map-types**

|Value|Description|
|---|---|
|MapType.GOOGLEMAPS (default)|Google-maps.|
|MapType.LEAFLET|Leaflet.js.|

* [MapView](#module_MapView)
  * [class: MapView](#exp_module_MapView--MapView) ⏏
    * _instance_
      * [`.getFinalPosition()`](#module_MapView--MapView#getFinalPosition) ⇒ <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code>
    * [`new MapView(options)`](#new_module_MapView--MapView_new)
    * _static_
      * [`.DEFAULT_OPTIONS`](#module_MapView--MapView.DEFAULT_OPTIONS)
    * _instance_
      * [`.getMap()`](#module_MapView--MapView#getMap) ⇒ <code>Map</code>
      * [`.setPosition(position, [transition], [callback])`](#module_MapView--MapView#setPosition)
      * [`.getPosition()`](#module_MapView--MapView#getPosition) ⇒ <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code>
    * _static_
      * [`enum: .MapType`](#module_MapView--MapView.MapType) → <code>Number</code>
    * _instance_
      * [`.getZoom()`](#module_MapView--MapView#getZoom) ⇒ <code>Number</code>
      * [`.pointFromPosition(position)`](#module_MapView--MapView#pointFromPosition) ⇒ <code>Point</code>
      * [`.positionFromPoint(point)`](#module_MapView--MapView#positionFromPoint) ⇒ <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code>
      * [`.getSize()`](#module_MapView--MapView#getSize) ⇒ <code>Array.Number</code>
      * [`.halt()`](#module_MapView--MapView#halt)
      * [`.isActive()`](#module_MapView--MapView#isActive) ⇒ <code>Bool</code>

<a name="exp_module_MapView--MapView"></a>
### class: MapView ⏏
<a name="module_MapView--MapView#getFinalPosition"></a>
#### `mapView.getFinalPosition()` ⇒ <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code>
Get the destination center position of the map, in geographical coordinates.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code> - Position in geographical coordinates.<a name="new_module_MapView--MapView_new"></a>
#### `new MapView(options)`

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options. |
| options.type | <code>[MapType](#module_MapView--MapView.MapType)</code> | Map-type (e.g. MapView.MapType.GOOGLEMAPS, MapView.MapType.LEAFLET). |
| options.mapOptions | <code>Object</code> | Options that are passed directly to the Map object. The options should include the 'center' and 'zoom'. |
| [options.id] | <code>String</code> | Id of the DOM-element to use. When ommitted, a DOM-element is created using a surface. |
| [options.zoomTransition] | <code>Transition</code> | Transition to use for smoothly zooming renderables (by default a transition of 120 ms is used). |
<a name="module_MapView--MapView.DEFAULT_OPTIONS"></a>
#### `MapView.DEFAULT_OPTIONS`
**Scope**: static member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Access:** protected  
**Properties**

| Name |
| --- |
| DEFAULT_OPTIONS | 
<a name="module_MapView--MapView#getMap"></a>
#### `mapView.getMap()` ⇒ <code>Map</code>
Get the internal map-object. This object may not yet have been initialized, the map is only
guarenteed to be valid after the 'load' event has been emited.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>Map</code> - Map object.<a name="module_MapView--MapView#setPosition"></a>
#### `mapView.setPosition(position, [transition], [callback])`
Set the center of the map to the given geographical coordinates.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code> | Position in geographical coordinates. |
| [transition] | <code>Transitionable</code> | Transitionable. |
| [callback] | <code>function</code> | callback to call after transition completes. |
<a name="module_MapView--MapView#getPosition"></a>
#### `mapView.getPosition()` ⇒ <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code>
Get the current center position of the map, in geographical coordinates.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code> - Position in geographical coordinates.<a name="module_MapView--MapView.MapType"></a>
#### `enum: MapView.MapType` → <code>Number</code>
Map-type

**Scope**: static member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| GOOGLEMAPS | <code>Number</code> | <code>1</code> | 
| LEAFLET | <code>Number</code> | <code>2</code> | 
<a name="module_MapView--MapView#getZoom"></a>
#### `mapView.getZoom()` ⇒ <code>Number</code>
Get the current zoom-level of the map, taking into account smooth transition between zoom-levels.
E.g., when zooming from zoom-level 4 to 5, this function returns an increasing value starting at 4 and ending
at 5, over time. The used zoomTransition can be set as an option.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>Number</code> - Zoom-level.<a name="module_MapView--MapView#pointFromPosition"></a>
#### `mapView.pointFromPosition(position)` ⇒ <code>Point</code>
Get the position in pixels (relative to the left-top of the container) for the given geographical position.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>Point</code> - Position in pixels, relative to the left-top of the mapView.
| Param | Type | Description |
| --- | --- | --- |
| position | <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code> | in geographical coordinates. |
<a name="module_MapView--MapView#positionFromPoint"></a>
#### `mapView.positionFromPoint(point)` ⇒ <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code>
Get the geographical coordinates for a given position in pixels (relative to the left-top of the container).

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>[LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng)</code> - Position in geographical coordinates.
| Param | Type | Description |
| --- | --- | --- |
| point | <code>Point</code> | Position in pixels, relative to the left-top of the mapView. |
<a name="module_MapView--MapView#getSize"></a>
#### `mapView.getSize()` ⇒ <code>Array.Number</code>
Get the size of the map-view in pixels.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>Array.Number</code> - Size of the mapView.<a name="module_MapView--MapView#halt"></a>
#### `mapView.halt()`
Halts any pending transitions.

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
<a name="module_MapView--MapView#isActive"></a>
#### `mapView.isActive()` ⇒ <code>Bool</code>
Is there at least one action pending completion?

**Scope**: instance member of <code>[MapView](#exp_module_MapView--MapView)</code>  
**Returns**: <code>Bool</code> - True when there are active transitions running.