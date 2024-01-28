// import React, { useState } from 'react';
// import { View, Button, Image, Platform } from 'react-native';
// import ImagePicker, { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';

// const Imagepicker: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);

//   const openImagePicker = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//     };

//     ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
//       if (!response.didCancel) {a
//         setImage(response.uri);
//       }
//     });
//   };

// // You can also use as a promise without 'callback':
//   const result = await launchImageLibrary(options?);
// 000000000000000000000000000000000000000000000000000000000000
//   return (
//     <View>
//       <Button title="Open Gallery and Pick Image" onPress={openImagePicker} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// };

// export default Imagepicker;

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

const Imagepicker = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const selectImage = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 500,
      quality: 1,
      includeBase64: true
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('Cancelled');
      } else if (response.error) {
        console.log(response.errorMessage);
      } else {
        console.log('Image', response.assets[0]);
        setUploadImage(response.assets[0]);
      }
    });
  };

  return (
    <View>
      <Pressable onPress={selectImage}>
        {uploadImage && (
          <Image
            source={{ uri: `data:${uploadImage.type};base64,${uploadImage.base64}` }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <Text>Upload Image</Text>
      </Pressable>
    </View>
  );
};

export default Imagepicker;