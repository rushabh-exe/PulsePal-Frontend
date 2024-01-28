import axios, { AxiosResponse } from 'axios';
import { ImagePickerResponse } from 'react-native-image-picker';

interface ImageData {
  uri: string;
  type: string;
}

const BASE_URL = 'http://192.168.65.249:5001';  // Update with your Flask backend URL

const sendImageAndText = async (image: ImagePickerResponse, text: string): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('image', {
      uri: image.uri,
      type: image.type,
      name: 'image.jpg',
    } as ImageData);
    formData.append('Question', text);

    const response: AxiosResponse<{ response: string }> = await axios.post(
      `${BASE_URL}/gemini_llm_vision`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200 && response.data.response) {
      return response.data.response;
    } else {
      console.error('Unexpected server response:', response);
      return null;
    }
  } catch (error) {
    console.error('Error sending or receiving messages:', error);
    return null;
  }
};

export { sendImageAndText };
