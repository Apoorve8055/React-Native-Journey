import React, {useCallback, useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Snackbar from 'react-native-snackbar';
import RNFS from 'react-native-fs';

const App = () => {
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState();
  const [cameraType, setcameraType] = useState(RNCamera.Constants.Type.back);

  const takePicture = useCallback(async () => {
    const options = {quality: 0.5, base64: true};
    const imgData = await cameraRef?.current?.takePictureAsync(options);
    setPhoto(imgData?.uri);
  }, []);

  const saveToGallery = async () => {
    if (!photo) {
      Snackbar.show({
        text: 'No image captured Please capture an image first',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }

    try {
      const imageName = Date.now();
      const destPath = `${RNFS.ExternalStorageDirectoryPath}/Pictures/ProfilePic${imageName}.jpg`;
      await RNFS.copyFile(photo, destPath);
      Snackbar.show({
        text: 'Image Saved To Gallery!',
        duration: Snackbar.LENGTH_SHORT,
      });
    } catch (error) {
      console.log('Error saving image to gallery:', error);
    }
  };

  const switchCamera = () => {
    setcameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1}}
            source={{
              uri: photo,
            }}
          />
        </View>
      ) : (
        <RNCamera
          ref={cameraRef}
          style={{flex: 1}}
          type={cameraType}
          // flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      )}
      {photo ? (
        <View style={styles.afterImageConatiner}>
          <TouchableOpacity style={styles.snap} onPress={saveToGallery}>
            <Text style={{color: '#fff'}}>Save Snap</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.snap}
            onPress={() => {
              setPhoto(null);
            }}>
            <Text style={{color: '#fff'}}>Re-take Snap</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.afterImageConatiner}>
          <TouchableOpacity style={styles.snap} onPress={takePicture}>
            <Text style={{color: '#fff'}}>Snap</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.IconButtonConatiner}
            onPress={switchCamera}>
            <Text style={{color: '#fff'}}>Switch Camera</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  snap: {
    padding: 24,
    backgroundColor: 'black',
    // alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  IconButtonConatiner: {
    padding: 18,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  afterImageConatiner: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
