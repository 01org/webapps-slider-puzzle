/*
 * Copyright (c) 2013, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */
define(
['stapes', 'lodash', 'text!../data/photos.json'],
function (Stapes, _, photosJson) {
  'use strict';

  // a photo collection which includes photos from the game
  // as well as photos added from snapshots via the camera
  var PhotoCollection = Stapes.subclass({
    addPhoto: function (photo) {
      photoCollection.set(photo.id, photo);
    }
  });

  var photoCollection = new PhotoCollection();

  var photos = JSON.parse(photosJson);

  _.each(photos, function (photo) {
    photoCollection.set(photo.id, photo);
  });

  return photoCollection;
});
